
const apiUrl = 'http://assignment.binated.com/api/posts';


async function fetchBlogPosts() {
    const response = await fetch('http://assignment.binated.com/api/posts');
    const data = await response.json();
    
}

async function createBlogPost(title) {
    await fetch('http://assignment.binated.com/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    });
   
}






   



