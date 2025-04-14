
import React from "react";

const tips = [
    {
        title: "Eat Slow-Digesting Carbs Before Workouts",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/07/1109-oatmeal.jpg?quality=86&strip=all",
        alt: "Oatmeal",
        description: "Eating slow-digesting carbs like oatmeal and sweet potatoes helps burn fat and improve endurance."
      },
      {
        title: "Avoid Higher-Fat Meals Before Workouts",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/03/1109-Hamburger-Junk-Food-GettyImages-998260550.jpg?quality=86&strip=all",
        alt: "Fast Food",
        description: "High-fat meals reduce blood flow and muscle pump, making your workout less effective."
      },
      {
        title: "Eat a Green Salad Before The Gym",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/07/Man-Preparing-Salad-Vegetables.jpg?quality=86&strip=all",
        alt: "Green Salad",
        description: "A green salad before workouts can help maintain blood flow and improve muscle recovery."
      },
      {
        title: "Don't Drop Dietary Cholesterol Too Low",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/07/Scrambled-Eggs-Frying-Pan.jpg?quality=86&strip=all",
        alt: "Eggs in a Pan",
        description: "Cholesterol helps maintain testosterone levels and muscle growth. Include eggs and lean meats in your diet."
      },
      {
        title: "Don't Train Too Heavy For Too Long",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/06/Man-Resting-With-Towel.jpg?quality=86&strip=all",
        alt: "Man Resting",
        description: "Avoid long periods of heavy training as it increases myostatin, which limits muscle growth."
      },
      {
        title: "Keep Your Focus on the Muscle You're Training",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/12/man-dumbbell-curls-629102571.jpg?quality=86&strip=all",
        alt: "Biceps Curl",
        description: "Focusing on the muscle being trained increases recruitment and long-term muscle growth."
      },
      {
        title: "Drink Four Cups of Tea Daily",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/04/1109-Lemon-Tea-GettyImages-1022201570.jpg?quality=86&strip=all",
        alt: "Tea Cup",
        description: "Drinking tea reduces cortisol levels, helping you recover faster after workouts."
      },
      {
        title: "Use Forced Reps on Your Last Sets",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/03/not-having-a-spotter--prevent-injury--692735717.jpg?quality=86&strip=all",
        alt: "Gym Spotter",
        description: "Forced reps increase growth hormone levels, leading to better muscle growth."
      },
      {
        title: "Stretch Only After Training",
        image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/05/Towel-Stretch-Male.jpg?quality=86&strip=all",
        alt: "Stretching Man",
        description: "Stretching before training weakens muscles; stretching after workouts improves flexibility."
      }
];

const WorkoutTips = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold pt-20">Expert Tips To Improve Your Workout</h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Your workout begins the moment you wake up, not just when you enter the gym. Proper nutrition, supplements, and habits can significantly improve your training results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg">{tip.title}</h3>
            <img src={tip.image} alt={tip.title} className="w-full h-40 object-cover rounded-lg my-4" />
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default WorkoutTips;