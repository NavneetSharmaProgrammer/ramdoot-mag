export const getProjects = (req, res) => {
  const projects = [
    {
      title: "Ancient Baoli Restoration",
      description: "Reviving a forgotten stepwell and clearing centuries of debris to restore the natural water flow.",
      status: "Completed",
      type: "Baoli (Stepwell)"
    },
    {
      title: "Neglected Temple Cleanup",
      description: "Removing overgrown vegetation and structural reinforcement of a 10th-century temple.",
      status: "In Progress",
      type: "Temple"
    },
    {
      title: "Sacred Space Revival",
      description: "Restoring an ancient resting place for pilgrims and conducting community awareness programs.",
      status: "Planned",
      type: "Community Space"
    }
  ];

  res.json(projects);
};
