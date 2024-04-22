import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Metadata } from '../interface/metadata.interface';

export const DataTableMaps: React.FC<{ metadata: Metadata[] | undefined }> = ({metadata}) => {
  return (
    <>
      <div className="card w-3/4 mx-auto">
            <DataTable value={metadata} tableStyle={{ minWidth: '50rem' }}>
                <Column field="key" header="Categoría"></Column>
                <Column field="value" header="Valor" style={{}}></Column> 
            </DataTable>
      </div>
    
    </>
  )
}
