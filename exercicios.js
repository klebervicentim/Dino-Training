// =====================================================================
//  DADOS PADRÃO DO APP
//
//  Cada dia aceita até 12 exercícios. Para cada um:
//    nome       -> título mostrado na lista
//    series     -> texto curto mostrado ao lado (ex: "4x10")
//    descricao  -> texto mostrado abaixo do vídeo
//    youtube    -> código (ou link) do vídeo do YouTube. O app mostra a
//                  thumbnail; ao tocar, o vídeo toca do YouTube (precisa de internet)
//
//  Fonte: "Rotina de força – 3 treinos de corpo inteiro + dia 4 opcional"
//  (doc no Claude). Ordem dos treinos: 1 → 2 → 3, sem dias fixos; o dia 4 é opcional.
//  Aquecimento: 5 min de esteira e, antes do 1º exercício com barra, 2–3 séries de
//  aproximação com pouco peso.
//
//  Se houver um dados.json no GitHub (edições feitas pelo app), ele tem prioridade
//  sobre este arquivo. Para aplicar mudanças daqui, atualize também o dados.json.
// =====================================================================

const NOMES_DIAS = {
  dia1: "Dia 1",
  dia2: "Dia 2",
  dia3: "Dia 3",
  dia4: "Dia 4",
};

const TITULOS_DIAS = {
  dia1: "Treino 1: Agachamento e supino",
  dia2: "Treino 2: Terra e desenvolvimento",
  dia3: "Treino 3: Perna unilateral e glúteos",
  dia4: "Opcional: cardio, core e postura",
};

const EXERCICIOS = {
  dia1: [
    { nome: "Agachamento goblet", series: "3x8–12", descricao: "Segure um halter junto ao peito. Quando o halter mais pesado ficar fácil em 12 repetições, troque pelo agachamento búlgaro. Descanso: 90–120 s.", youtube: "jaglUwcC1zE" },
    { nome: "Supino com halteres no banco reto", series: "3x8–12", descricao: "Cotovelos a ~45° do tronco. Descanso: 90–120 s.", youtube: "jrT3xWa0U9M" },
    { nome: "Remada curvada com barra", series: "3x8–10", descricao: "Tronco a ~45°, coluna neutra. Descanso: 2 min.", youtube: "kbZm59Jtgkg" },
    { nome: "Elevação lateral com halteres", series: "2x12–15", descricao: "Peso leve, subir até a linha dos ombros. Descanso: 60 s.", youtube: "XMMRx3qM_aA" },
    { nome: "Prancha", series: "3x30–45 s", descricao: "Glúteos e abdômen contraídos, sem deixar o quadril cair. Descanso: 60 s.", youtube: "rttTAImJW-A" },
    { nome: "Panturrilha em pé unilateral com halter", series: "2x10–15 por perna", descricao: "Ponta do pé sobre uma anilha ou degrau, pausa de 1–2 s embaixo. Descanso: 60 s.", youtube: "49yI1Ht34n8" },
  ],
  dia2: [
    { nome: "Levantamento terra com barra", series: "3x5–8", descricao: "Sempre o primeiro exercício; barra rente às pernas, coluna neutra. Grave de lado nas primeiras sessões para revisar a técnica. Descanso: 2–3 min.", youtube: "QiqUXcz2iyA" },
    { nome: "Desenvolvimento com halteres em pé", series: "3x8–12", descricao: "Ou sentado no banco sem encosto; abdômen firme, sem arquear a lombar. Descanso: 90–120 s.", youtube: "e_efj_DURQM" },
    { nome: "Remada unilateral com halter (serrote)", series: "3x10–12 por lado", descricao: "Mão e joelho apoiados no banco. Descanso: 90 s.", youtube: "qcDIao-CoFU" },
    { nome: "Crucifixo invertido (deltoide posterior)", series: "2x12–15", descricao: "De bruços no banco ou inclinado em pé; peso leve. Descanso: 60 s.", youtube: "0L4I4eiQhf4" },
    { nome: "Rosca direta com barra", series: "2x10–12", descricao: "Cotovelos junto ao corpo, sem balançar o tronco. Descanso: 60 s.", youtube: "yopIHJ-jr3w" },
  ],
  dia3: [
    { nome: "Agachamento búlgaro com halteres", series: "3x8–10 por perna", descricao: "Pé de trás apoiado no banco. Descanso: 90 s.", youtube: "Qor7IMSvQcE" },
    { nome: "Flexão com os pés no banco", series: "3x8–15", descricao: "Se fizer 15 com facilidade, use uma mochila com peso. Descanso: 90 s.", youtube: "4oqiJErWi_M" },
    { nome: "Elevação pélvica (hip thrust) com barra", series: "3x8–12", descricao: "Parte alta das costas no banco, toalha sob a barra. Descanso: 2 min.", youtube: "h1lGpMfbwqQ" },
    { nome: "Pullover com halter", series: "2x10–12", descricao: "Deitado no banco; trabalha o dorsal no lugar da barra fixa. Descanso: 60–90 s.", youtube: "TVUYI8UhahE" },
    { nome: "Tríceps francês com halter", series: "2x10–12", descricao: "Cotovelos apontando para cima, sem abrir. Descanso: 60 s.", youtube: "5uolmk0hgP0" },
    { nome: "Prancha lateral", series: "2x20–30 s por lado", descricao: "Corpo em linha reta da cabeça aos pés. Descanso: 45 s.", youtube: "A0RGKVDnUok" },
    { nome: "Panturrilha em pé unilateral com halter", series: "2x10–15 por perna", descricao: "Igual ao treino 1. Descanso: 60 s.", youtube: "49yI1Ht34n8" },
  ],
  dia4: [
    { nome: "Caminhada inclinada na esteira (zona 2)", series: "30–40 min", descricao: "Ritmo em que dá para conversar em frases completas, mas não para cantar. Dia leve (RPE 6–7): não pode deixar você cansado para o próximo treino, principalmente se for o 2, com levantamento terra. Se tiver pouco tempo, faça só o cardio.", youtube: "" },
    { nome: "Caminhada do fazendeiro", series: "3x30–40 s", descricao: "Halteres pesados, corpo ereto, ombros para trás. Descanso: 60–90 s.", youtube: "MTxG3rboW9A" },
    { nome: "Abdominal infra no banco", series: "2x10–15", descricao: "Movimento controlado, sem dar impulso. Descanso: 60 s.", youtube: "fN1zziClTfE" },
    { nome: "Dead bug", series: "2x8 por lado", descricao: "Lombar sempre encostada no chão. Descanso: 45 s.", youtube: "0loS0bRNqfs" },
    { nome: "Crucifixo invertido (deltoide posterior)", series: "2x15", descricao: "Peso leve. Descanso: 60 s.", youtube: "0L4I4eiQhf4" },
  ],
};
