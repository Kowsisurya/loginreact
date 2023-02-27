import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import Button from 'react-bootstrap/Button';

const ExcelExport = ({ excelData, fileName }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheettml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = { Sheets: { 'data' : ws }, SheetNames:['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    return(
        <>
            <label className='plat-export-excel'  onClick={(e) => exportToExcel(fileName)}>Export to Excel</label>
        </>
    );
}

export default ExcelExport;
