import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ToolData from "../components/tools/Tool";
import DefaultLayout from "../layout/DefaultLayout";

const Tool = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Peralatan' />

      <div className='flex flex-col gap-10'>
        <ToolData />
      </div>
    </DefaultLayout>
  );
};

export default Tool;
