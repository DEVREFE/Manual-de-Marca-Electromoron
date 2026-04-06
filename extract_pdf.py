import fitz # PyMuPDF
import os

pdf_path = r'd:\Proyectos\Electromorón - Electrónica 106\DRIVE\E.106-20260401T231202Z-1-001\ENTREGABLE FINAL_ Electromorón - E.106\Electromorón\03. Activos Digitales & Campañas\ESTRATEGIA PUBLICITARIA\Estrategia publicitaria Electromorón.pptx.pdf'
out_dir = r'd:\Proyectos\Electromorón - Electrónica 106\DRIVE\E.106-20260401T231202Z-1-001\ENTREGABLE FINAL_ Electromorón - E.106\Manual-de-Marca\public\assets\estrategia'

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

doc = fitz.open(pdf_path)
print(f'Total pages: {len(doc)}')

for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # 2x zoom for high quality
    out_file = os.path.join(out_dir, f'slide_{i+1:02d}.jpg')
    pix.save(out_file)
    print(f'Saved {out_file}')
