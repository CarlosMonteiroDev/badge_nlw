const linkSocialMedia = {
    github: 'CarlosMonteiroDev',
    youtube: 'channel/UCwFHDbXiCF75LLx33X8j72g',
    facebook: 'carlosmath00',
    instagram: 'carlosmathmonteiro',
    twitter: 'carlos_math00'
}

function changeSocialMediaLinks() {
    
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`;
    }
    
    
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const urlApiGitHub = `https://api.github.com/users/${linkSocialMedia.github}`;

    fetch(urlApiGitHub)
    .then(response => response.json())
    .then(data => {
        userName.innerHTML = data.name;

        let photo = document.getElementsByClassName("avatar")[0];

        photo.children[1].src = data.avatar_url;

        let biography = document.getElementsByTagName("p")[0];

        biography.innerHTML = data.bio;

        let anchor = document.getElementsByTagName('a')[0];

        anchor.innerHTML += data.login;

        anchor.href = data.html_url;
    })
}
getGitHubProfileInfos();