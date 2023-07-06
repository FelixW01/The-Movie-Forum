const editPost = async event => {
  event.preventDefault();
  const url = window.location.toString().split('/');
  const postId = url[url.length - 1];
  const title = document.querySelector('input[name ="edit-title"]').value;
  const content = document.querySelector('textarea[name="edit-content"]').value;

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Something went wrong');
  }
};

document
  .querySelector('#update-btn')
  .addEventListener('submit', editPost);