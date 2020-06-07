function setupSpoiler() {
    var postBody = $('#cnblogs_post_body');
    if(postBody.length !== 0)
        postBody.html(postBody.html().replace(/\[spoiler\]/g, '<span class="spoiler">').replace(/\[\/spoiler\]/g, '</span>'));
}
