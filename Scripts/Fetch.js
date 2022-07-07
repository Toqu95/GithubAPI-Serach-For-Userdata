function addElement(data, element, content, id){
    if (data != null)
    {
        if (document.getElementById(id) != null)
        {
            document.getElementById(id).innerHTML = content[0];
        }
        else
        {
            if (element == "p")
            {
                var p = document.createElement("p");
                p.innerHTML = content[0];
                document.getElementById("Content").appendChild(p);
                p.id = id;
            }
        }
    }

    if (data != null)
    {
        if (document.getElementById(id) != null)
        {
            if (document.getElementById(id) != null)
            {
                document.getElementById(id).src = content[0];
            }
            else
            {
                if (element == "img")
                {
                    var img = document.createElement("img");
                    img.src = content[0];
                    document.getElementById("Content").appendChild(img);
                    p.id = id;
                }
            }
        }
    }

    if (data != null)
    {
        if (document.getElementById(id) != null)
        {
            document.getElementById(id).innerHTML = content[0];
            document.getElementById(id).href = content[1];
        }
        else
        {
            if (element == "a")
            {
                var p = document.createElement("a");
                p.innerHTML = content[0];
                p.href = content[1];
                document.getElementById("Content").appendChild(p);
                p.id = id;
            }
        }
    }
}

function fetchData(id) {
    fetch("https://api.github.com/users/" + id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addElement(data.avatar_url, "img", [data.avatar_url], "avatar")
            addElement(data.name, "p", ["Name: " + data.name], "name");
            addElement(data.login, "p", ["Username: " + data.login], "username");
            addElement(data.email, "p", ["Email: " + data.email], "email");
            addElement(data.bio, "p", ["Bio: " + data.bio], "bio");
            addElement(data.id, "p", ["ID: " + data.id], "id");
            addElement(data.blog, "a", ["Blog: " + data.blog, data.blog], "blog");
            addElement(data.followers, "p", ["Followers: " + data.followers], "followers");
            addElement(data.following, "p", ["Following: " + data.following], "following");
            addElement(data.public_repos, "p", ["Public Repos: " + data.public_repos], "public_repos");
            addElement(data.public_gists, "p", ["Public Gists: " + data.public_gists], "public_gists");
            addElement(data.location, "p", ["Location: " + data.location], "location");
            addElement(data.company, "p", ["Company: " + data.company], "company");
            addElement(data.hireable, "p", ["Hireable: " + data.hireable], "hireable");
            addElement(data.created_at, "p", ["Created At: " + data.created_at], "created_at");
            addElement(data.updated_at, "p", ["Updated At: " + data.updated_at], "updated_at");
            addElement(data.type, "p", ["Type: " + data.type], "type");
        });
}

var button = document.getElementById("button")

// if input != null then fetch data when button is pressed
if(button)
{
    console.log("trying to fetch data...");
    try {
        button.addEventListener("click", function () {
            var input = document.getElementById("input").value;
            if (input != null) {
                fetchData(input);
                console.log("fetched data successfully!");
            }
        });
    } catch (error) {
        console.log("error fetching data!");
    }
}

fetchData("Toqu95");