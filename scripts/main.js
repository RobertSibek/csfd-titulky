// document.addEventListener('DOMContentLoaded', function () {
//     chrome.storage.sync.get(["key"]).then((result) => {
//         document.forms["providerSelection"][result.key].checked = true;
//     });
//     const el = document.getElementById("saveProviderButton");
//     if (el) {
//         el.addEventListener("click", SaveProvider);
//     } else {
//         console.log("Button not found");
//     }
// });
//
// function SaveProvider() {
//     const form = document.getElementById("providerSelection");
//     const provider_name = form.elements["provider"].value;
//     console.log('provider_name', provider_name);
//     chrome.storage.sync.set({key: provider_name}).then(() => {
//         console.log("Value is set");
//     });
//     window.close();
// }
//
//
//
