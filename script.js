// ! Jangan ubah kode di bawah ini, ok :)
const contributorsUrl =
  "https://api.github.com/repos/cuingskot76/belajar-berkontribusi/contributors";
const ownerUrl = "https://api.github.com/users/cuingskot76";

const fetchOwner = async () => {
  const response = await fetch(ownerUrl);
  const data = await response.json();
  const avatarOwner = data.avatar_url;

  const owner = document.querySelector(".owner");

  const boxOwner = document.createElement("div");
  boxOwner.classList.add("box");

  const imgOwner = document.createElement("img");
  imgOwner.src = avatarOwner;

  const nameOwner = document.createElement("p");
  nameOwner.textContent = data.login;

  const seeProfileContent = document.createElement("p");
  const seeProfile = document.createElement("a");
  seeProfile.href = data.html_url;
  seeProfile.textContent = "Lihat Profil";
  seeProfileContent.classList.add("see-profile__content");
  seeProfile.classList.add("see-profile");
  seeProfileContent.appendChild(seeProfile);

  const ownerRepo = document.createElement("p");
  ownerRepo.textContent = "Pemilik Repo";
  ownerRepo.classList.add("owner-repo");

  owner.appendChild(ownerRepo);

  boxOwner.appendChild(imgOwner);
  boxOwner.appendChild(nameOwner);
  boxOwner.appendChild(seeProfileContent);
  owner.appendChild(boxOwner);
};

fetchOwner();

const fetchContributors = async () => {
  const response = await fetch(contributorsUrl);
  const data = await response.json();

  const contributors = document.querySelector(".contributors");
  const contributorContent = document.querySelector(".contributor-content");

  const nameContributors = document.createElement("p");
  nameContributors.textContent = "Kontributor";
  nameContributors.classList.add("name-contributors");
  contributorContent.appendChild(nameContributors);

  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box-contributors");

    const img = document.createElement("img");
    img.src = item.avatar_url;

    const name = document.createElement("p");
    name.textContent = item.login;

    const contributions = document.createElement("p");
    contributions.textContent = item.contributions;

    const seeProfileContent = document.createElement("p");
    const seeProfile = document.createElement("a");
    seeProfile.href = item.html_url;
    seeProfile.textContent = "Lihat Profil";
    seeProfileContent.classList.add("see-profile__content");
    seeProfile.classList.add("see-profile");
    seeProfileContent.appendChild(seeProfile);

    box.appendChild(img);
    box.appendChild(name);
    box.appendChild(contributions);
    box.appendChild(seeProfileContent);

    contributors.appendChild(box);
  });
  contributorContent.appendChild(contributors);
};

fetchContributors();
