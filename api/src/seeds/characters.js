exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("characters")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("characters").insert([
        {
          name: "Chewbacca",
          description:
            "Chewbacca, known affectionately to his friends as Chewie, is a Wookiee male warrior, smuggler, mechanic, pilot, and resistance fighter.",
          bornAt: "1994-08-29T21:10:00Z",
          planet: "FN-BBA-22",
          planet_id: 2,
          pictureUrl:
            "https://upload.wikimedia.org/wikipedia/en/6/6d/Chewbacca-2-.jpg",
        },
        {
          name: "Norbert Ériu",
          description: "Norbert is a farmer.",
          bornAt: "1983-12-25T23:56:00Z",
          planet: "FN-BBA-22",
          planet_id: 2,
          pictureUrl:
            "https://images.unsplash.com/photo-1588422333078-44ad73367bcb",
        },
        {
          name: "Sümeyye Sitora",
          description: "Sümeyye is a teacher.",
          bornAt: "2093-11-24T12:10:00Z",
          planet: "FN-BBA-22",
          planet_id: 2,
          pictureUrl:
            "https://images.unsplash.com/photo-1606103955054-99913abd77c8",
        },
        {
          name: "Cori Blagovesta",
          description:
            "Cori is known as the most teasing person in the galaxy.",
          bornAt: "0004-01-01T09:24:00Z",
          planet: "XT-FOE-43",
          planet_id: 1,
          pictureUrl:
            "https://images.unsplash.com/photo-1530071100468-90954e4921d0",
        },
        {
          name: "Nisha Amala",
          description: "Nisha is curious about what happens in the Outer Rim",
          bornAt: "0749-04-12T05:02:00Z",
          planet: "XT-FOE-43",
          planet_id: 2,
          pictureUrl:
            "https://images.unsplash.com/photo-1592210566091-9e18a5fc01b4",
        },
        {
          name: "Spyro Gerarda",
          description: "Spyro is Spyro",
          bornAt: "4001-10-21T01:59:00Z",
          planet: "EM-PVA-98",
          planet_id: 3,
          pictureUrl:
            "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc",
        },
      ]);
    });
};
