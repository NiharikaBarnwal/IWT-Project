function toggleReplyForm(postId) {
    const replyForm = document.getElementById('reply-form-' + postId);
    if (replyForm.style.display === 'block') {
        replyForm.style.display = 'none';
    } else {
        replyForm.style.display = 'block';
    }
}
function submitReply(postId) {
    const replyInput = document.getElementById('reply-input-' + postId);
    const repliesContainer = document.getElementById('replies-' + postId);
    if (replyInput.value.trim() !== '') {
        const newReply = document.createElement('div');
        newReply.textContent = replyInput.value;
        newReply.style.margin = '10px 0';
        newReply.style.padding = '8px';
        newReply.style.backgroundColor = '#f1f1f1';
        newReply.style.borderRadius = '5px';
        repliesContainer.appendChild(newReply);
        replyInput.value = '';
        toggleReplyForm(postId);
    }
}