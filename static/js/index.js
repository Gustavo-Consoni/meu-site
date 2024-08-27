document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        contact_modal: false,
        message_modal: false,
        contact: {},
        navbar: [
            {
                title: 'Soluções',
                href: '#solutions',
            },
            {
                title: 'Desenvolvimento',
                href: '#development',
            },
            {
                title: 'Blog',
                href: '#blog',
            },
            {
                title: 'Dúvidas',
                href: '#faq',
            },
        ],
        questions: [
            {
                title: 'Quais são os benefícios esperados de implementar machine learning em meu negócio?',
                description: 'Implementar machine learning no seu negócio pode aumentar a eficiência operativa, melhorar a tomada de decisões através de insights mais precisos e personalizados, e proporcionar uma vantagem competitiva ao automatizar tarefas complexas e identificar oportunidades de mercado',
            },
            {
                title: 'Quais dados são necessários para desenvolver uma solução de machine learning eficaz?',
                description: 'Para desenvolver uma solução de machine learning eficaz, são necessários dados relevantes e de alta qualidade, incluindo dados históricos sobre operações, transações e comportamento dos clientes, além de informações adicionais específicas do setor para enriquecer o modelo',
            },
            {
                title: 'Quanto tempo leva para desenvolver e implementar uma solução de machine learning?',
                description: 'O desenvolvimento e implementação de uma solução de machine learning geralmente levam de alguns meses a um ano, dependendo da complexidade do projeto, da quantidade de dados necessários e da integração com os sistemas existentes',
            },
            {
                title: 'Como a solução de machine learning será integrada aos sistemas existentes?',
                description: 'A solução de machine learning será integrada aos sistemas existentes através de APIs, serviços web ou módulos personalizados, garantindo compatibilidade e facilitando a comunicação entre o novo modelo e os sistemas atuais, sem interromper suas operações',
            },
            {
                title: 'Como garantir a privacidade e a segurança dos dados ao usar machine learning',
                description: 'Para garantir a privacidade e a segurança dos dados ao usar machine learning, são implementadas práticas rigorosas de criptografia, controle de acesso, anonimização de dados sensíveis e conformidade com regulamentos de proteção de dados, além de monitoramento contínuo para detectar e responder a possíveis ameaças',
            },
            {
                title: 'Como medir o sucesso de uma solução de machine learning?',
                description: 'A qualidade do algoritimo de machine learning é medida por métricas específicas, como precisão, F1-score ou EQM. Medimos também o sucesso da solução através de indicadores financeiros e/ou de performance usados no seu negócio',
            },
        ],

        send_contact() {
            this.contact.device = window.innerWidth <= 640 ? 'Mobile' : window.innerWidth <= 1024 ? 'Tablet' : 'Desktop'
            this.contact.date = new Date().toISOString().split('T')[0]

            fetch('', {
                method: 'POST',
                body: JSON.stringify(this.contact),
            })
            this.contact_modal = false
            this.contact = {}
            this.message_modal = true
            setTimeout(() => {
                this.message_modal = false
            }, 5000)
        },

    }))
})
