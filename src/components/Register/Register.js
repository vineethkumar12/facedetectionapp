import { React, useState } from "react";

export const Register = ({ change, userdata }) => {
  const [data, setdata] = useState({
    regipassword: "",
    regiemail: "",
    reginame: "",
  });

  onsubmit = (e) => {
    e.preventDefault();

    fetch("https://node-server3-nsfe.onrender.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.regiemail,
        password: data.regipassword,
        name: data.reginame,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (
          result.name !== "" &&
          result.password !== "" &&
          result.email !== ""
        ) {
          change("home");
          userdata(result);
          // console.log(result)
        } else {
          alert("invalid register");
        }
      });
  };
  return (
    <div>
      <div>
        <article className="br3  ba dark-gray shadow-3 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
          <main className="pa4 black-80 ">
            <div className="measure  ">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0"> Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name-address">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    onChange={(e) =>
                      setdata({ ...data, reginame: e.target.value })
                    }
                    type="text"
                    name="name-address"
                    id="name-address"
                  />
                </div>

                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    onChange={(e) =>
                      setdata({ ...data, regiemail: e.target.value })
                    }
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    onChange={(e) =>
                      setdata({ ...data, regipassword: e.target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  onClick={onsubmit}
                  value=" Register"
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};
