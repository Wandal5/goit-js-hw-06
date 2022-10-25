const input = document.querySelector("#validation-input");

const addRemovePassword = (remove, add) => {
  input.classList.remove(`${remove}`);
  input.classList.add(`${add}`);
};

const validPassword = (e) => {
  if (Number(input.dataset.length) === e.currentTarget.value.length) {
    addRemovePassword("invalid", "valid");
  } else {
    addRemovePassword("valid", "invalid");
  }
};

input.addEventListener("blur", validPassword);
