export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const response = await fetch(
      `https://find-a-coach-150b0-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );
    if (!response.ok) {
      //error handler
    }

    context.commit("registerCoach", { ...coachData, id: userId });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://find-a-coach-150b0-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const responseData = response.json();
    console.log(responseData);
    if (!response.ok) {
      // error handler
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit("setCoaches", coaches);
  },
};
