import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import Loading from "./Loading";

function DuolingoCard({ name }) {
  const [profile, setProfile] = useState(null);
  const Duolingo = require("duolingo-api");
  const credential = {
    username: "HoseCloud",
    id: 795379412,
  };

  let duolingo = new Duolingo(credential);

  async function getInfo() {
    let data = await duolingo.getRawData();
    data = data.users[0];

    setProfile({
      picture: data.picture,
      streak: data.streak,
      courses: data.courses,
      totalXp: data.totalXp,
    });
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="flex place-content-center m-2 space-x-1 gap-4 px-4">
      {profile === null ? (
        <Loading />
      ) : (
        <div className="flex bg-white rounded-lg p-6">
          <div>
            <img
              className="w-32 h-32 rounded-full mr-6 mb-5"
              src={profile.picture + "/xlarge"}
              alt="Profile"
            />
            <a
              href={"https://www.duolingo.com/profile/" + name}
              className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              Visit Duolingo
            </a>
          </div>
          <div>
            <p className="font-bold text-lg mb-2">{name}</p>
            <p className="text-gray-500 mb-1">
              🔥 {profile.streak} days streak
            </p>
            <p className="text-gray-500 mb-1">{profile.totalXp} xp</p>
            {profile.courses.map((data) => (
              <p className="text-gray-500" key={data.title}>
                {data.title}({data.fromLanguage}) : {data.xp} xp
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
DuolingoCard.prototype = {
  name: PropTypes.string.isRequired,
};

export default DuolingoCard;
