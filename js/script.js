/*
- Purpose: JS async/await --> fetch practice | "Random User Generator"
- Date: 04-NOV-2022
*/

//=========================================
// ==== Random User Generator Program ====
//=========================================

// ====================================================================================

//====================
// ==== variables ====
//====================

const randomFolks = document.querySelector(".random-peeps");
const selectUserNumbers = document.querySelector(".num-users");

//==========================
// ==== async functions ====
//==========================

const getData = async function (numUsers, url = "https://randomuser.me/api/") {
  const userRequest = await fetch((url += `?results=${numUsers}`));
  const data = await userRequest.json();
  const userResults = data.results;

  const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    userResults.forEach(function (item) {
      const country = item.location.country;
      const name = item.name.first + " " + item.name.last;
      const imageUrl = item.picture.medium;
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
        <h3>Name: ${name}</h3>
        <p>Country: ${country}</p>
        <img src="${imageUrl}" alt="User avatar"/>
      `;

      randomFolks.append(userDiv);
      // console.log(name + ": " + country, imageUrl);
    });
  };
  displayUsers(userResults);
};

//========================
// ==== event listener ===
//========================

selectUserNumbers.addEventListener("change", function (e) {
  const numUsers = e.target.value;
  getData(numUsers);
});

// =====================
// === init Program ====
//======================

getData(1);
