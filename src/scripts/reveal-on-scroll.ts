function removeClassAfterDuration(element: Element, duration: number) {
    setTimeout(() => {
        element.classList.remove('ros-revealed');
        element.classList.remove('ros');
        (element as HTMLElement).style.transitionDuration = "200ms";
    }, duration * 1000)
}

function setupObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ros-revealed');
                const removeDelay: number = parseFloat((entry.target as HTMLElement).style.transitionDuration);
                removeClassAfterDuration(entry.target, removeDelay);
            }
        });
    });

    const delayDefault: number = 0.5;
    const delayIncrement: number = 0.1;
    let delay: number = delayDefault;
    const rosElements = document.querySelectorAll('.ros');
    rosElements.forEach((element) => {
        if (((element as HTMLElement).previousElementSibling as HTMLElement)?.classList.contains("ros")) {
            delay += delayIncrement;
        }
        else {
            delay = delayDefault;
        }

        (element as HTMLElement).style.transitionDuration = delay.toString() + "s";
        observer.observe(element)
    });
}

document.addEventListener("astro:after-swap", setupObserver)
setupObserver()