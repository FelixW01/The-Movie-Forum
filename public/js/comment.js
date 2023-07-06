const commentFormHandler = async event => {
    event.preventDefault();
    const content = document.querySelector('#comment').value.trim();
    const url = window.location.toString().split('/');
    const postId = url[url.length - 1];

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            content,
            postId
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Something went wrong!')
    }
}
document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);