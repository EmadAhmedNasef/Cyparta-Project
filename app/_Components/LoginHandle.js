export async function handleLogin(formData) {
  "use server";
  const email = formData.get("email");
  const password = formData.get("password");
  const response = await fetch(
    "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email,
        password,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
}
