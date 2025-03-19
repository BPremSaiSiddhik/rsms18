// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// const suppliersData = [
//   { id: 1, name: "ABC Suppliers", location: "New York", category: "Electronics", rating: 4, status: "Active" },
//   { id: 2, name: "XYZ Wholesalers", location: "Los Angeles", category: "Apparel", rating: 5, status: "Inactive" },
// ];

// export default function Sup() {
//   const [search, setSearch] = useState("");
//   const [suppliers, setSuppliers] = useState(suppliersData);
//   const [filters, setFilters] = useState({ location: "", category: "", rating: "", status: "" });
//   const [newSupplier, setNewSupplier] = useState({ name: "", location: "", category: "", rating: "", status: "Active" });

//   const filteredSuppliers = suppliers.filter((supplier) =>
//     supplier.name.toLowerCase().includes(search.toLowerCase()) &&
//     (filters.location ? supplier.location === filters.location : true) &&
//     (filters.category ? supplier.category === filters.category : true) &&
//     (filters.rating ? supplier.rating === Number(filters.rating) : true) &&
//     (filters.status ? supplier.status === filters.status : true)
//   );

//   const addSupplier = () => {
//     setSuppliers([...suppliers, { id: suppliers.length + 1, ...newSupplier }]);
//     setNewSupplier({ name: "", location: "", category: "", rating: "", status: "Active" });
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Supplier Management</h1>
//       <div className="flex gap-2 mb-4">
//         <Input placeholder="Search suppliers..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full" />
//         <Dialog>
//           <DialogTrigger>
//             <Button>Add Supplier</Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add New Supplier</DialogTitle>
//             </DialogHeader>
//             <div className="space-y-3">
//               <Input placeholder="Supplier Name" value={newSupplier.name} onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })} />
//               <Input placeholder="Location" value={newSupplier.location} onChange={(e) => setNewSupplier({ ...newSupplier, location: e.target.value })} />
//               <Input placeholder="Category" value={newSupplier.category} onChange={(e) => setNewSupplier({ ...newSupplier, category: e.target.value })} />
//               <Input type="number" placeholder="Rating (1-5)" value={newSupplier.rating} onChange={(e) => setNewSupplier({ ...newSupplier, rating: e.target.value })} />
//               <Select onValueChange={(val) => setNewSupplier({ ...newSupplier, status: val })}>
//                 <SelectTrigger>{newSupplier.status || "Select Status"}</SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="Active">Active</SelectItem>
//                   <SelectItem value="Inactive">Inactive</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button onClick={addSupplier}>Save</Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>
//       <div className="flex gap-2 mb-4">
//         <Input placeholder="Location" onChange={(e) => setFilters({ ...filters, location: e.target.value })} className="w-1/4" />
//         <Input placeholder="Category" onChange={(e) => setFilters({ ...filters, category: e.target.value })} className="w-1/4" />
//         <Input type="number" placeholder="Rating (1-5)" onChange={(e) => setFilters({ ...filters, rating: e.target.value })} className="w-1/4" />
//         <Select onValueChange={(val) => setFilters({ ...filters, status: val })}>
//           <SelectTrigger>{filters.status || "Status"}</SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Active">Active</SelectItem>
//             <SelectItem value="Inactive">Inactive</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid gap-4">
//         {filteredSuppliers.map((supplier) => (
//           <Card key={supplier.id}>
//             <CardContent className="p-4 flex justify-between">
//               <div>
//                 <p className="font-semibold">{supplier.name}</p>
//                 <p className="text-sm text-gray-500">{supplier.location} | {supplier.category}</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-sm">Rating: {supplier.rating}</p>
//                 <p className={`text-sm ${supplier.status === "Active" ? "text-green-500" : "text-red-500"}`}>{supplier.status}</p>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
