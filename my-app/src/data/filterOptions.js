export const genderObj = {
  options: [
    { value: "", label: "All" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "genderless", label: "Genderless" },
    { value: "unknown", label: "Unknown" },
  ],
  filter: "gender",
  description: "Filter characters by their gender.",
};

export const speciesObj = {
  options: [
    { value: "", label: "All" },
    { value: "human", label: "Human" },
    { value: "alien", label: "Alien" },
    { value: "humanoid", label: "Humanoid" },
    { value: "mythological creature", label: "Mythological Creature" },
    { value: "animal", label: "Animal" },
    { value: "robot", label: "Robot" },
  ],
  filter: "species",
  description: "Filter characters by their species.",
};

export const statusObj = {
  options: [
    { value: "", label: "All" },
    { value: "alive", label: "Alive" },
    { value: "dead", label: "Dead" },
    { value: "unknown", label: "Unknown" },
  ],
  filter: "status",
  description: "Filter characters by their status.",
};
