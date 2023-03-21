import { v4 as uuidv4 } from "uuid";
export interface Ticket {
  id: string;
  title: string;
  description: string;
  tasks: string[];
}
export interface Project {
  name: string;
  id: string;
  board: { name: string; tickets: Ticket[] }[];
}
export const projectsData: Project[] = [
  {
    name: "hej",
    id: uuidv4(),
    board: [
      {
        name: "Todo",
        tickets: [
          {
            title: "first ever ticket",
            description: "This is a ticket",
            id: uuidv4(),
            tasks: ["task 1", "task 2"],
          },
        ],
      },
      {
        name: "Doing",
        tickets: [
          {
            title: "secound ever ticket",
            description: "This is a ticket",
            id: uuidv4(),
            tasks: ["task 1", "task 2"],
          },
        ],
      },
      {
        name: "Done",
        tickets: [
          {
            title: "secound ever ticket",
            description: "This is a ticket",
            id: uuidv4(),
            tasks: ["task 1", "task 2"],
          },
        ],
      },
    ],
  },
];
