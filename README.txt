 Documentação: UniRide - Aplicativo de Carona Universitária  

 1. Visão Geral  
UniRide é um aplicativo de caronas compartilhadas entre estudantes universitários. Ele conecta passageiros e motoristas (que também são alunos) para viagens seguras e econômicas dentro do campus e para residências próximas.  

Principais Funcionalidades:  
✔ Viagens compartilhadas ou particulares  
✔ Roteamento inteligente (Google Maps API)  
✔ Avaliação de motoristas e passageiros  
✔ Pagamento dentro do app  
✔ Botão de emergência (SOS Polícia)  



 2. Público-Alvo  
Estudantes:  
- Passageiros: Podem solicitar caronas para a faculdade ou para casa.  
- Motoristas: Alunos com carro que oferecem corridas por um custo mínimo.  

Turnos de Funcionamento:  
- Segunda a sexta (matutino, vespertino e noturno).  
- Finais de semana não suportados (uso limitado).  



 3. Cadastro e Segurança  

 Motoristas  
Dados Obrigatórios:  
- Nome completo  
- Número de contato  
- Endereço  
- Dados do veículo (modelo, placa, cor, etc.)  
- Comprovante de matrícula  
- Validação de antecedentes (sem multas/irregularidades)  

 Passageiros  
Dados Obrigatórios:  
- Nome  
- Idade  
- E-mail e telefone  
- Endereço residencial  

Segurança:  
- Avaliação pós-corrida (1-5 estrelas)  
- Botão de emergência (envia localização para a polícia)  
- Restrição de linguagem em avaliações  



 4. Funcionalidades Principais  

 Motoristas  
✔ Visualizar solicitações de corrida  
✔ Aceitar/rejeitar viagens  
✔ Ver rota com melhor trajeto (Google Maps)  
✔ Avaliar passageiros após a viagem  
✔ Receber pagamento via app  

 Passageiros  
✔ Solicitar corrida (compartilhada ou particular)  
✔ Ver motorista mais próximo e tempo estimado  
✔ Escolher forma de pagamento (cartão/dinheiro)  
✔ Avaliar motorista após a viagem  
✔ Acessar histórico de corridas  

 Viagem Compartilhada  
- Máximo de 3 passageiros + motorista.  
- Valor reduzido (compartilhando custos).  
- Rotas semelhantes combinadas automaticamente.  



 5. Cálculo de Tarifas  
 Fórmula:  
`Tarifa Base (R$ 2,75) + (R$ 1,50/km) + (R$ 0,15–0,30/min)`  

Exemplo:  
- 5 km & 15 minutos → R$ 2,75 + R$ 7,50 + R$ 4,50 = R$ 14,75  



 6. Tecnologias Utilizadas  
 Frontend (Mobile):  
- Framework: Flutter (Android/iOS)  
- UI: Material Design  

⚙ Backend:  
- Linguagem: Python (Django/FastAPI)  
- Banco de Dados: PostgreSQL  
- Armazenamento: Amazon S3 (documentos)  

 APIs:  
- Google Maps (rotas e geolocalização)  
- Firebase Cloud Messaging (notificações)  



 7. Fluxo do Aplicativo  
1. Login/Cadastro → Validação de estudante.  
2. Solicitação de Corrida → Escolha entre viagem compartilhada ou particular.  
3. Combinação com Motorista → App seleciona o motorista com rota mais próxima.  
4. Pagamento → Opções: cartão ou dinheiro.  
5. Avaliação → Passageiro e motorista se avaliam após a viagem.  



 8. Próximos Passos (Roadmap)  
 Fase de Testes:  
- Testes internos (chamadas entre devices).  
- Beta fechado para alunos voluntários.  

 Lançamento:  
- Publicação na Play Store (futuramente iOS).  
- Parceria com a faculdade para divulgação.  

 Futuras Melhorias:  
- Chat integrado para comunicação.  
- Expansão para outras universidades.  



  Considerações Finais  
O UniRide visa facilitar o transporte universitário, garantindo segurança, economia e praticidade. Se surgirem dúvidas ou sugestões, entre em contato:  
✉ suporte@unirideapp.com  

Equipe UniRide 🚗💨  

 

  Anexos (Opcionais):  
- [Protótipo de Telas (Figma)]()  
- [Política de Privacidade]()  

*(Documentação simplificada para facilitar o entendimento de desenvolvedores e stakeholders.)*