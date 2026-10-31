// =====================================================================
//  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
//
//  Cada dia aceita até 12 exercícios. Para cada um:
//    nome       -> título mostrado na lista
//    series     -> texto curto mostrado ao lado (ex: "4x10")
//    descricao  -> texto mostrado abaixo do vídeo
//    youtube    -> código (ou link) do vídeo do YouTube. O app mostra a
//                  thumbnail; ao tocar, o vídeo toca do YouTube (precisa de internet)
//
//  Fonte dos dias 1 a 3: 3-Day Workout Routine.pdf
// =====================================================================

const NOMES_DIAS = {
  dia1: "Dia 1",
  dia2: "Dia 2",
  dia3: "Dia 3",
  dia4: "Dia 4",
};

const TITULOS_DIAS = {
  dia1: "Peito, Bíceps e Core",
  dia2: "Costas, Tríceps e Core",
  dia3: "Pernas e Core",
  dia4: "Exemplo: Ombros e Abdômen",
};

const EXERCICIOS = {
  dia1: [
    { nome: "Aquecimento: esteira", series: "5-10 min", descricao: "Caminhada ou trote leve na esteira para aquecer o corpo.", youtube: "6RSecnjZ4nQ" },
    { nome: "Flexão de braço", series: "3x12", descricao: "Mãos na largura dos ombros, corpo em linha reta. Desça o peito até perto do chão e empurre de volta.", youtube: "P3D2PPMYWjk" },
    { nome: "Supino com halteres/barra", series: "3x10", descricao: "Deitado no banco, desça o peso até o peito com controle e empurre para cima sem travar os cotovelos.", youtube: "rT7DgCr-3pg" },
    { nome: "Crucifixo com halteres", series: "3x12", descricao: "Cotovelos levemente flexionados. Abra os braços até sentir o peito alongar e feche contraindo.", youtube: "eozdVDA78K0" },
    { nome: "Flexão inclinada", series: "2x15", descricao: "Mãos apoiadas em uma superfície elevada (banco). Versão mais leve da flexão.", youtube: "FzzXgC_j0aY" },
    { nome: "Rosca direta com halteres", series: "3x12", descricao: "Cotovelos fixos ao lado do corpo. Suba os halteres sem balançar o tronco.", youtube: "ykJmrZ5v0Oo" },
    { nome: "Rosca martelo", series: "3x10", descricao: "Palmas das mãos voltadas uma para a outra durante todo o movimento.", youtube: "zC3nLlEvin4" },
    { nome: "Rosca concentrada", series: "3x8 cada braço", descricao: "Sentado, cotovelo apoiado na parte interna da coxa. Suba o halter devagar e contraia no topo.", youtube: "soxrZlIl35U" },
    { nome: "Rosca direta com barra", series: "2x12", descricao: "Pegada na largura dos ombros, cotovelos junto ao corpo, sem usar impulso.", youtube: "kwG2ipFRgfo" },
    { nome: "Prancha", series: "3x30-60 s", descricao: "Apoio nos antebraços e pontas dos pés, corpo em linha reta, abdômen contraído.", youtube: "ASdvN_XEl_c" },
    { nome: "Abdominal (crunch)", series: "3x20", descricao: "Mãos ao lado da cabeça, eleve os ombros do chão contraindo o abdômen sem puxar o pescoço.", youtube: "Xyd_fa5zoEU" },
    { nome: "Elevação de pernas", series: "3x15", descricao: "Deitado, eleve as pernas estendidas até 90 graus e desça devagar sem encostar no chão.", youtube: "l4kQd9eWclE" },
  ],
  dia2: [
    { nome: "Aquecimento: esteira inclinada", series: "8 min", descricao: "Caminhada na esteira com inclinação para aquecer o corpo.", youtube: "s4XbI0Hq5dQ" },
    { nome: "Remada curvada", series: "3x12", descricao: "Tronco inclinado, coluna neutra. Leve o peso em direção ao abdômen e desça com controle.", youtube: "vT2GjY_Umpw" },
    { nome: "Levantamento terra", series: "3x10", descricao: "Barra rente às pernas, costas retas. Estenda quadril e joelhos juntos para subir.", youtube: "op9kVnSso6Q" },
    { nome: "Remada unilateral com halter", series: "3x10 cada lado", descricao: "Um joelho e uma mão apoiados no banco. Puxe o halter até o quadril.", youtube: "pYcpY20QaE8" },
    { nome: "Superman", series: "3x15", descricao: "De barriga para baixo, eleve braços e pernas ao mesmo tempo, segure 1 segundo e desça.", youtube: "z6PJMT2y8GQ" },
    { nome: "Mergulho no banco (tríceps)", series: "3x12", descricao: "Mãos no banco atrás do corpo. Flexione os cotovelos descendo o quadril e empurre de volta.", youtube: "0326dy_-CzM" },
    { nome: "Extensão de tríceps acima da cabeça", series: "3x10", descricao: "Segure um halter com as duas mãos atrás da cabeça e estenda os braços para cima.", youtube: "_gsUck-7M74" },
    { nome: "Tríceps coice", series: "3x12", descricao: "Tronco inclinado, cotovelo junto ao corpo. Estenda o braço para trás e contraia.", youtube: "6SSGbJ3cP9U" },
    { nome: "Supino pegada fechada", series: "2x12", descricao: "Pegada na largura dos ombros, cotovelos próximos ao corpo ao descer a barra.", youtube: "d_Jnre4fK8Y" },
    { nome: "Escalador (mountain climber)", series: "3x30 s", descricao: "Em posição de prancha alta, alterne os joelhos em direção ao peito em ritmo rápido.", youtube: "nmwgirgXLYM" },
    { nome: "Giro russo", series: "3x20", descricao: "Sentado com o tronco inclinado e pés elevados, gire o tronco de um lado para o outro.", youtube: "wkD8rjkodUI" },
    { nome: "Prancha lateral", series: "2x30 s por lado", descricao: "Apoio no antebraço, quadril elevado, corpo em linha reta.", youtube: "K2VljzCC16g" },
  ],
  dia3: [
    { nome: "Aquecimento: esteira", series: "5-10 min", descricao: "Caminhada na esteira aumentando o ritmo de forma progressiva.", youtube: "6RSecnjZ4nQ" },
    { nome: "Agachamento com peso", series: "4x12", descricao: "Pés na largura dos ombros, desça até as coxas ficarem paralelas ao chão, joelhos alinhados com os pés.", youtube: "aclHkVaku9U" },
    { nome: "Afundo com halteres", series: "3x10 cada perna", descricao: "Dê um passo à frente e desça até os dois joelhos ficarem a 90 graus. Volte e alterne.", youtube: "mBhqeQm8RdM" },
    { nome: "Stiff (levantamento terra romeno)", series: "3x12", descricao: "Joelhos levemente flexionados, leve o quadril para trás descendo o peso rente às pernas.", youtube: "2SHsk9AzdjA" },
    { nome: "Panturrilha em pé", series: "3x20", descricao: "Suba na ponta dos pés o máximo possível, segure 1 segundo e desça devagar.", youtube: "gwLzBJYoWlI" },
    { nome: "Cadeirinha na parede", series: "3x30 s", descricao: "Costas na parede, joelhos a 90 graus, como se estivesse sentado. Segure o tempo indicado.", youtube: "-cdph8hv0O0" },
    { nome: "Abdominal bicicleta", series: "3x20", descricao: "Deitado, alterne cotovelo e joelho oposto enquanto pedala no ar.", youtube: "9FGilxCbdz8" },
    { nome: "Abdominal reverso", series: "3x15", descricao: "Deitado, leve os joelhos em direção ao peito elevando o quadril do chão.", youtube: "HyvP5u9H1VQ" },
    { nome: "Prancha com toque no ombro", series: "3x30 s", descricao: "Em prancha alta, toque o ombro oposto alternando as mãos sem girar o quadril.", youtube: "9ZElmakv3z0" },
  ],
  dia4: [
    { nome: "Desenvolvimento com halteres", series: "4x10", descricao: "Sentado, suba os halteres acima da cabeça sem arquear a lombar.", youtube: "" },
    { nome: "Elevação lateral", series: "3x15", descricao: "Eleve os braços até a altura dos ombros, cotovelos levemente flexionados.", youtube: "" },
    { nome: "Prancha", series: "3x40s", descricao: "Apoie antebraços e pontas dos pés, corpo em linha reta, abdômen contraído.", youtube: "" },
  ],
};
