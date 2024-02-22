import { create } from "zustand";

export const useStore = create((set) => ({
  tableData: [
    {
      id: "s3iz96m8",
      name: "Grace",
      address: "404 Cairo",
      tags: "datascience",
      status: "pending",
    },
    {
      id: "t7fj82n5",
      name: "John",
      address: "123 Main St",
      tags: "developer",
      status: "approved",
    },
    {
      id: "u2he45k9",
      name: "Emily",
      address: "789 Elm St",
      tags: "designer",
      status: "rejected",
    },
    {
      id: "v6ty73p2",
      name: "David",
      address: "567 Oak St",
      tags: "manager",
      status: "pending",
    },
    {
      id: "w1xo64q3",
      name: "Sophie",
      address: "901 Pine St",
      tags: "datascience",
      status: "approved",
    },
    {
      id: "x5zp29r6",
      name: "Michael",
      address: "345 Birch St",
      tags: "developer",
      status: "rejected",
    },
    {
      id: "y8ld37s4",
      name: "Olivia",
      address: "678 Cedar St",
      tags: "designer",
      status: "pending",
    },
    {
      id: "z4jc58w7",
      name: "Daniel",
      address: "234 Maple St",
      tags: "manager",
      status: "approved",
    },
    {
      id: "a9bh76u1",
      name: "Emma",
      address: "876 Walnut St",
      tags: "datascience",
      status: "rejected",
    },
    {
      id: "b2vk84t3",
      name: "Christopher",
      address: "543 Spruce St",
      tags: "developer",
      status: "pending",
    },
    {
      id: "c6ni93m2",
      name: "Ava",
      address: "210 Redwood St",
      tags: "designer",
      status: "approved",
    },
    {
      id: "d4fx52p8",
      name: "Matthew",
      address: "789 Pine St",
      tags: "manager",
      status: "rejected",
    },
    {
      id: "e1sg48o7",
      name: "Mia",
      address: "432 Oak St",
      tags: "datascience",
      status: "pending",
    },
    {
      id: "f3lr67u9",
      name: "Ethan",
      address: "876 Birch St",
      tags: "developer",
      status: "approved",
    },
    {
      id: "g5tj79w2",
      name: "Isabella",
      address: "123 Elm St",
      tags: "designer",
      status: "rejected",
    },
    {
      id: "h7vx84q5",
      name: "William",
      address: "456 Cedar St",
      tags: "manager",
      status: "pending",
    },
  ],
  addNewClient: (obj) =>
    set((state: any) => ({ tableData: [...state.tableData, obj] })),
}));