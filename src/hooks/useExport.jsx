import html2canvas from "html2canvas"

const useExport = () => {
    
    const exportAsImage = async (el, imageFileName) => {

        const element = el.current;
        const canvas = await html2canvas(element,{ allowTaint: false,  useCORS: true});
        
        const data = canvas.toDataURL('image/jpeg', 1.0);
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = `${imageFileName}.jpg`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
        
            }
  return {
    exportAsImage
  }
}

export default useExport