document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');

    let currentValues = {};
    const stories = [
        (values) => `Once upon a time in ${values.place}, there was a ${values.adjective} ${values.noun} who loved to ${values.verb} with ${values.person}.`,
        (values) => `${values.person} went to ${values.place} and found a ${values.adjective} ${values.noun}. They decided to ${values.verb} together.`,
        (values) => `In ${values.place}, a ${values.adjective} ${values.noun} was seen ${values.verb} by ${values.person}. It was a sight to behold!`
    ];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (noun && adjective && person && verb && place) {
            currentValues = { noun, adjective, person, verb, place };
            storySpan.textContent = stories[0](currentValues);
        } else {
            alert('Please fill the form');
        }
    });
});