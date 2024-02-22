import { useEffect, useState } from "react";
import { useStore } from "../../store/clients";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TableDemo } from "@/components/shared/TableDemo";

const UserProfile = () => {
  const { id } = useParams();
  const tableData = useStore((state) => state.tableData);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = tableData.find((user) => user.id === id);
    setUserData(user || null);
  }, [id, tableData]);

  const renderField = (value) =>
    value && (
      <p className="mb-4 text-lg">
        <span className="font-semibold">{value}</span>
      </p>
    );

  return (
    <div className="container mx-auto overflow-x-auto p-8">
      <h2 className="text-3xl font-bold m-6">Properties</h2>
      {userData ? (
        <>
          <div className="bg-white flex flex-col md:flex-row justify-between rounded-lg shadow-md p-6">
            {renderField(userData.address)}
            {renderField(userData.line2)}
            {renderField(userData.city)}
            {renderField(userData.country)}
            {renderField(userData.postalCode)}
          </div>
          <h2 className="text-3xl font-bold m-6">Overview</h2>

          <Tabs defaultValue="activework" className="w-full ">
            <div className="md:flex bg-white flex flex-col md:flex-row justify-between rounded-lg shadow-md">
              <TabsList className="flex flex-wrap gap-0 md:gap-10">
                <TabsTrigger className="tab-trigger" value="activework">
                  Active Work
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="requests">
                  Requests
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="quotes">
                  Quotes
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="jobs">
                  Jobs
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="invoices">
                  Invoices
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="chemicaltreatment">
                  Chemical Trearment
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-10 ml-5">
              <TabsContent value="activework">
                Make changes to your activework here.
              </TabsContent>
              <TabsContent value="requests">
                Change your requests here.
              </TabsContent>
              <TabsContent value="quotes">Change your quotes here.</TabsContent>
              <TabsContent value="jobs">Change your Jobs here.</TabsContent>
              <TabsContent value="invoices">
                Change your invoices here.
              </TabsContent>
              <TabsContent value="chemicaltreatment">
                Change your chemical treatment here.
              </TabsContent>
            </div>
          </Tabs>
          <h2 className="text-3xl font-bold m-6">Schedule</h2>
          <TableDemo />
        </>
      ) : (
        <p className="text-gray-600">Loading user profile...{id}</p>
      )}
    </div>
  );
};

export default UserProfile;
