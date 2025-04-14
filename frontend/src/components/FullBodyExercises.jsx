import React from 'react';

const FullBodyExercises = () => {
  return (
    <div className="p-6 bg-gray-100 mt-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Best Full-Body Exercises You Can Do at Home</h2>
        <p className="text-gray-700 mt-2">
          Incorporating no-equipment full-body exercises into your fitness routine offers a multitude of benefits,
          from increased strength and muscle definition to improved balance, coordination, and calorie burn. You can
          achieve a comprehensive workout from the comfort of your own home with little to no equipment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">{exercise.title}</h3>
            <img src={exercise.image} alt={exercise.alt} className="w-full h-auto rounded-lg my-4" />
            <div>
              <h4 className="font-medium">Instructions:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                {exercise.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-gray-200 rounded-lg">
        <h4 className="font-semibold">Notes:</h4>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Adjust the number of repetitions and sets based on your fitness level and goals.</li>
          <li>Maintain proper form throughout each exercise to prevent injury and maximize results.</li>
          <li>Ensure you have proper rest between sets to recover and maintain good form.</li>
          <li>Stay hydrated throughout your workout, and listen to your body.</li>
        </ul>
      </div>
      <footer className="mt-8 p-6 bg-gray-300 text-center rounded-lg">
       
        <p className="mt-4">All materials on this website are unique, copyrighted, and exclusive to gymwebsite.com.</p>
      </footer>
    </div>
  );
};

const exercises = [
  {
    title: "Bodyweight Squats (Legs and Glutes)",
    image: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Bodyweight-Squat.gif",
    alt: "Bodyweight Squat",
    instructions: [
      "Stand with feet shoulder-width apart and toes slightly outward.",
      "Keep your chest up, shoulders back, and core engaged for stability.",
      "Lower your body by bending at the hips and knees, as if sitting in a chair.",
      "Ensure knees stay aligned with toes and don't extend beyond them.",
      "Push through your heels to return to a standing position.",
      "Perform 3 sets of 12-15 reps, adjusting based on fitness level."
    ]
  },
  {
    title: "Push-Ups (Chest, Shoulders, and Triceps)",
    image: "https://fitnessprogramer.com/wp-content/uploads/2022/12/Bodyweight-Exercises-Push-Up.gif",
    alt: "Push-Ups",
    instructions: [
      "Start in a plank position with hands slightly wider than shoulder-width apart.",
      "Lower your body by bending your elbows at a 45-degree angle.",
      "Bring your chest close to the ground while keeping proper form.",
      "Push through your palms to return to the starting position.",
      "Perform 3 sets of 10-15 reps, adjusting as needed."
    ]
  },
  {
    title: "Plank (Core and Full-Body Stability)",
    image: "https://fitnessprogramer.com/wp-content/uploads/2022/12/plank-for-bodyweight-exercises.gif",
    alt: "Plank",
    instructions: [
      "Start in a plank position with hands slightly wider than shoulder-width apart.",
      "Lower your body by bending your elbows at a 45-degree angle.",
      "Bring your chest close to the ground while keeping proper form.",
      "Push through your palms to return to the starting position.",
      "Perform 3 sets of 10-15 reps, adjusting as needed."
    ]
  },
  {
    title: "Reverse Lunges (Legs and Glutes)",
    image: "https://fitnessprogramer.com/wp-content/uploads/2022/08/bodyweight-reverse-lunge.gif" ,
    alt: "Reverse Lunges",
    instructions: [
      "Start in a plank position with hands slightly wider than shoulder-width apart.",
      "Lower your body by bending your elbows at a 45-degree angle.",
      "Bring your chest close to the ground while keeping proper form.",
      "Push through your palms to return to the starting position.",
      "Perform 3 sets of 10-15 reps, adjusting as needed."
    ]
  },
  {
    title: " Diamond Push-Ups (Chest, Triceps, Shoulder)",
    image: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif",
    alt: "Plank",
    instructions: [
      "Start in a plank position with hands slightly wider than shoulder-width apart.",
      "Lower your body by bending your elbows at a 45-degree angle.",
      "Bring your chest close to the ground while keeping proper form.",
      "Push through your palms to return to the starting position.",
      "Perform 3 sets of 10-15 reps, adjusting as needed."
    ]
  },
  {
    title: "Burpees (Full-Body Cardio)",
    image:"https://fitnessprogramer.com/wp-content/uploads/2021/02/burpees.gif" ,
    alt: "Plank",
    instructions: [
      "Start in a plank position with hands slightly wider than shoulder-width apart.",
      "Lower your body by bending your elbows at a 45-degree angle.",
      "Bring your chest close to the ground while keeping proper form.",
      "Push through your palms to return to the starting position.",
      "Perform 3 sets of 10-15 reps, adjusting as needed."
    ]
  }

  // Add more exercises here
];

export default FullBodyExercises;