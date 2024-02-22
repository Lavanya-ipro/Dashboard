import NewClientForm from "@/components/forms/NewClientForm";

const AddClient = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        {/* <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <h2 className="h3-bold md:h2-bold text-left w-full">New Client</h2>
        </div> */}

        <NewClientForm />
      </div>
    </div>
  );
};

export default AddClient;
