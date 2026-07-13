import PyPDF2
import os

pdf_dir = r"H:\My Drive\Job Related Folder\CV 2026\normal CVs"
files = [
    "CV Antonio Tagaruma _ General.pdf",
    "CV Edu - Antonio Tagaruma García.pdf",
    "CV IT-Tech - Antonio Tagaruma García.pdf"
]

with open('cv_output.txt', 'w', encoding='utf-8') as out_f:
    for filename in files:
        path = os.path.join(pdf_dir, filename)
        out_f.write(f"\n{'='*50}\nReading: {filename}\n{'='*50}\n")
        try:
            with open(path, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                text = ""
                for i, page in enumerate(reader.pages):
                    text += page.extract_text() + "\n"
                out_f.write(text)
        except Exception as e:
            out_f.write(f"Error reading {filename}: {e}\n")
