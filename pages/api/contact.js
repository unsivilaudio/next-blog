export default async function useHandler(req, res) {
    const { method, body } = req;
    const { firstName, lastName, email, phone, message } = body;

    switch (method) {
        case 'POST':
            const required = [firstName, lastName, email, message];
            if (!required.every(x => !!x)) {
                return res.status(400).json({
                    status: 'fail',
                    message: `Missing one or more request params: ${required.join(
                        ' '
                    )}`,
                });
            }

            return res.status(201).json({
                status: 'success',
                message: 'Message submitted',
            });
        default:
            res.setHeader('ALLOW', ['POST']);
            res.status(403).send(`Method method not allowed.`);
    }
}
