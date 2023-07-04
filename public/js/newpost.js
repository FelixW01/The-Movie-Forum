const newPostFormHandler = async event => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    // const image = document.querySelector('#image')

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Something went wrong!')
    }
}
document
    .querySelector('#post-create-form')
    .addEventListener('submit', newPostFormHandler);