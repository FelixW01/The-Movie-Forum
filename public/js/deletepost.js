const deletePost = async event => {
  event.preventDefault();
  const url = window.location.toString().split('/');
  const postId = url[url.length - 1];

  const response = await fetch(`/api/post/${postId}`, {
    method: 'DELETE',
    body: json.stringify({
      postId,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    //   document.location.replace('/dashboard');
  } else {
    alert('Something went wrong');
  }
};

const button = document.getElementById('#delete-btn');
button.addEventListener('click', deletePost);