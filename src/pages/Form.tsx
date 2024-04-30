import FormPersonDetail from "../components/formPage/FormPersonDetail";
import TablePersonDetail from "../components/formPage/TablePersonDetail";
import AppLayout from "../components/layout/AppLayout";

const FormPage = () => {
  return (
    <>
      <AppLayout>
        <div className="container mx-auto border-solid-black mt-10 p-2 ">
          <FormPersonDetail />
        </div>
        <div className="mt-10">
          <TablePersonDetail />
        </div>
      </AppLayout>
    </>
  );
};

export default FormPage;
