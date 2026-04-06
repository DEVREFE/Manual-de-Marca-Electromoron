import fitz
import os
import glob

bases = glob.glob('d:/Proyectos/Electromor?n - Electr?nica 106/DRIVE/E.106-20260401T231202Z-1-001/ENTREGABLE FINAL_ Electromor?n - E.106/Electromor?n')
base = bases[0]
out_base = os.path.join(glob.glob('d:/Proyectos/Electromor?n - Electr?nica 106/DRIVE/E.106-20260401T231202Z-1-001/ENTREGABLE FINAL_ Electromor?n - E.106/Manual-de-Marca')[0], 'public', 'assets')

def extract(pdf_path, out_dir, start=0, end=None):
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
    print('Processing', pdf_path)
    doc = fitz.open(pdf_path)
    end = min(end or len(doc), len(doc))
    for i in range(start, end):
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        pix.save(os.path.join(out_dir, f'slide_{i+1:02d}.jpg'))
        print(f'Saved slide_{i+1:02d}')

p1 = glob.glob(base + '/03.*/ESTRATEGIA PUBLICITARIA/*.pdf')[0]
extract(p1, os.path.join(out_base, 'estrategia'))

p2 = glob.glob(base + '/02.*/IDENTIDAD VISUAL/*.pdf')[0]
extract(p2, os.path.join(out_base, 'lookandfeel'), start=23, end=37)