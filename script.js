function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  document.getElementById("confirmation").innerText =
    `Registration Successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;
}
