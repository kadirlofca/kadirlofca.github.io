<script lang="ts">
    import { type CollectionEntry } from 'astro:content';
    import { filters } from '../../stores/filters.store';
    import Filters from './Filters.svelte';
    import { cn } from '../../styles/cn';

    interface Props {
        allPosts: CollectionEntry<'posts'>[];
    }

    const { allPosts }: Props = $props();
    let sortedPosts: CollectionEntry<'posts'>[] = $state(allPosts);

    function getIntersectionLength(a: any[], b: any[]): number {
        const intersection = a.filter(value => b.includes(value));
        return intersection.length;
    }

    function sortPosts(filters: string[]) {
        if(!filters || filters.length == 0){
            sortedPosts = allPosts.sort((a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf());
            return;
        }
        
        sortedPosts = allPosts.sort((a: any, b: any) => getIntersectionLength(b.data.tags, filters) - getIntersectionLength(a.data.tags, filters));
    }

    filters.subscribe((value) => {
        sortPosts([...value]);
    })

    function compareTags(a: string, b: string): number {
        const includesA: boolean = $filters.includes(a);
        const includesB: boolean = $filters.includes(b);
        return includesA && includesB ? 0 : includesA ? -1 : includesB ? 1 : -1; 
    }

    function getSortedTags(post: CollectionEntry<'posts'>): string[] {
        return [...post.data.tags].sort((a, b) => compareTags(a, b));
    }
</script>

{#snippet postCard(post: CollectionEntry<'posts'>)}
    <a href={`/posts/${post.id}`} class="flex flex-col justify-between gap-2 min-h-32 h-full p-2 border rounded-interactive border-edge bg-linear-to-b from-secondary to-secondary/60 pointer-events-auto hover:border-accent duration-200">
        <h2 class="text-lg font-semibold">{post.data.title}</h2>
        <p>{post.data.description}</p>
        <div class="flex flex-row gap-2 text-transparent overflow-hidden bg-linear-to-r from-accent to-transparent from-92% bg-clip-text border-r border-edge">
            {#each getSortedTags(post) as tag}
                <span class={cn(($filters.length > 0 && !$filters.includes(tag)) ? "opacity-60" : "", "text-nowrap")}>{tag}</span>
            {/each}
        </div>
    </a>
{/snippet}

<Filters />

<div class="group grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-interactive pointer-events-none hover:border-edge duration-200">					
    {#each sortedPosts as post}
        {@render postCard(post)}
    {/each}
</div>