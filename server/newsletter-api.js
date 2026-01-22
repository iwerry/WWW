import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const NEWSLETTER_FILE = path.join(__dirname, 'newsletter-subscribers.json');

// Ensure file exists
async function ensureFile() {
    try {
        await fs.access(NEWSLETTER_FILE);
    } catch {
        await fs.writeFile(NEWSLETTER_FILE, JSON.stringify([], null, 2));
    }
}

app.post('/api/newsletter', async (req, res) => {
    try {
        await ensureFile();

        const { email, timestamp } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Email inválido' });
        }

        const data = JSON.parse(await fs.readFile(NEWSLETTER_FILE, 'utf-8'));

        // Check if email already exists
        if (data.some(sub => sub.email === email)) {
            return res.status(409).json({ error: 'Email já cadastrado' });
        }

        data.push({ email, timestamp: timestamp || new Date().toISOString() });
        await fs.writeFile(NEWSLETTER_FILE, JSON.stringify(data, null, 2));

        res.json({ success: true, message: 'Inscrito com sucesso!' });
    } catch (error) {
        console.error('Newsletter error:', error);
        res.status(500).json({ error: 'Erro ao processar inscrição' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Newsletter API running on http://localhost:${PORT}`);
});
