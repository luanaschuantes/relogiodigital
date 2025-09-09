function atualizarRelogio() {
    const agora = new Date();

    // Formata a hora
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');
    const horaAtual = `${horas}:${minutos}:${segundos}`;

    // Array com os dias da semana e meses
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    // Pega o dia da semana e o mês atuais
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();

    const dataCompleta = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    // Atualiza os elementos HTML
    document.getElementById('relogio-digital').textContent = horaAtual;
    document.getElementById('data-completa').textContent = dataCompleta;
}
