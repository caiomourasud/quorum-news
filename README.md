# Informativo do Quórum de Élderes

Editor do informativo mensal. A página é editada no próprio informativo e exportada como imagem (PNG) ou PDF.

- **Site:** https://caiomourasud.github.io/quorum-news/
- **No computador:** abra o `index.html` no Chrome (mantenha a pasta `assets` junto).

Quem abre o site vê o informativo e pode baixar o PNG ou o PDF. Para editar, clique no **lápis** (Entrar para editar). Os botões da barra são só ícones; parando o mouse em cima aparece o que cada um faz.

**No celular, dá para instalar como app:** no iPhone, abra o site no Safari → botão Compartilhar → **Adicionar à Tela de Início**; no Android, no Chrome → menu ⋮ → **Instalar app**. No app, "Baixar imagem" abre o compartilhar (WhatsApp, Salvar em Fotos…). No iPhone, o app instalado guarda os dados à parte do Safari: é preciso entrar com nome e senha uma vez nele.

## Entrar para editar

Quem edita clica em **Entrar para editar** e digita **o nome** (aparece no histórico ao lado do que a pessoa mudar) e **a senha do quórum**. Ninguém precisa de conta no GitHub. Maiúsculas e acentos na senha não fazem diferença. Para trocar o nome ou sair, clique no seu nome na barra de cima.

### Criar a senha (só o administrador, uma vez)

1. Com a conta **caiomourasud**, abra [este link](https://github.com/settings/personal-access-tokens/new?name=Informativo&description=Editar+o+Informativo+do+Qu%C3%B3rum+(quorum-news)&target_name=caiomourasud&expires_in=366&contents=write). Ele já vem com nome, validade de 1 ano e a permissão certa. Em **Repository access**, escolha **Only select repositories** → `quorum-news` e clique em **Generate token**. Copie a chave (começa com `github_pat_`).
2. No site, clique em **Entrar para editar → Sou o administrador: criar ou trocar a senha**, cole a chave e escolha a senha (três ou quatro palavras que o quórum lembre).
3. Passe a senha para quem vai editar.

O site guarda a chave no repositório **criptografada com a senha** (arquivo `acesso.json` no branch `dados`); só quem sabe a senha consegue usá-la, e ela só dá acesso a este repositório.

**Se a senha vazar** ou alguém não deve mais editar: crie uma chave nova (mesmo link), apague a antiga em [github.com › Fine-grained tokens](https://github.com/settings/personal-access-tokens), e salve de novo em "Sou o administrador" com a chave nova e outra senha. Quem estava conectado passa a ver "clique no seu nome para entrar de novo" e precisa da senha nova. **Quando a chave vencer** (1 ano), faça o mesmo.

## Todo mês

1. Clique em **Novo mês**. É criada a edição do mês seguinte à mais recente, como cópia dela, com todos os domingos em Discursos e em Vem, e Segue-me. Discursos e Aniversariantes começam vazios; o Vem, e Segue-me já vem com o nome e o link da aula de cada domingo (veja abaixo como importar as aulas).
2. Clique em qualquer texto da página e digite. **Enter** termina a edição. Acima do texto aparece uma barra para mudar fonte, tamanho, negrito, itálico, sublinhado, cor, destaque e link, ou para limpar a formatação. Atalhos: ⌘B, ⌘I, ⌘U e ⌘K (link).
3. Passe o mouse sobre um item para ver os controles dele:
   - **⋮⋮** à esquerda: arraste para mudar a ordem (ou use **Alt+↑/↓** enquanto digita no item);
   - **🔗** à direita: cola o link do item inteiro (discurso, lição ou anúncio). O link funciona no PDF, e os itens que já têm link mostram um ícone discreto na margem, só no editor;
   - **×** à direita: remove o item. O **+** no título do quadro adiciona um. Itens vazios não saem no informativo.
4. Para trocar a foto, passe o mouse sobre ela e clique em **Trocar imagem** (ou arraste um arquivo para a janela, ou cole com ⌘V). Arraste a foto para ajustar o enquadramento.
5. Em **Mensagens** estão os textos prontos para o WhatsApp de cada domingo, com a data e o link da aula da escola dominical e do discurso do 2º horário. Se faltar um link, cole ali mesmo: ele entra também no informativo.
6. Exporte com **Baixar imagem** (PNG 1600×2240, bom para o WhatsApp) ou **PDF / Imprimir** (escolha "Salvar como PDF"). Os links funcionam no PDF.

Se aparecer o aviso vermelho, o conteúdo não coube na página: encurte um texto ou remova um item.

## Discursos da Conferência Geral e aulas do Vem, e Segue-me

A cada Conferência Geral, importe a lista dos discursos uma vez: no menu do mês, clique em **Importar discursos da Conferência Geral…**, cole o link da conferência no site da Igreja (por exemplo `https://www.churchofjesuschrist.org/study/general-conference/2026/10?lang=por`) e clique em **Importar**. Leva alguns segundos. Cada discurso fica com o título, o nome de quem discursou e o link.

A lista fica salva no branch `dados` (`listas/conferencia-AAAA-MM.json`), então aparece para todos que editam. Importar de novo a mesma conferência só atualiza a lista.

**Busca nos Discursos.** Ao clicar num discurso do informativo, abre embaixo a lista da conferência mais recente importada. Digite parte do título ou do nome para filtrar e clique no discurso (ou use **↑/↓** e **Enter**): o item fica com o título em negrito, o nome de quem discursou e o link. Os discursos que já saíram em alguma edição aparecem com a data do domingo e a edição (por exemplo, "Usado em 08/11 (Novembro · 2026)"); o que está no próprio item aparece como "Escolhido aqui". Para escrever outra coisa, é só digitar e apertar **Enter** sem escolher nada da lista (**Esc** fecha a lista).

**Aulas do Vem, e Segue-me.** Uma vez por ano, no menu do mês, clique em **Importar aulas do Vem, e Segue-me…** e cole o link do manual do ano (por exemplo `https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026?lang=por`). Cada aula fica com o nome, as escrituras, o link e a semana (de segunda a domingo). A lista vai para `listas/vem-e-segue-me-AAAA.json` no branch `dados`. Com as aulas importadas, o **Novo mês** já preenche o Vem, e Segue-me com a aula da semana de cada domingo, e uma edição que já existe com esse quadro vazio é preenchida ao ser aberta. Depois de preenchido, cada item continua editável como qualquer texto; ⌘Z desfaz o preenchimento. Para dezembro e janeiro, importe também o manual do ano seguinte quando ele sair.

## Salvamento, histórico e desfazer

- **Tudo é salvo sozinho**, alguns segundos depois que você para de digitar. O status ao lado do mês mostra "Salvando…" e depois "Salvo às…". Quem abrir o site já vê a versão nova.
- **⌘Z / Ctrl+Z** desfaz e **⌘⇧Z** refaz (ou use as setas curvas na barra).
- **Histórico** mostra cada versão salva, com a hora e o nome de quem salvou. Clique numa versão para ver como estava e, se quiser, **Restaurar esta versão**.
- Se duas pessoas mexerem na mesma edição ao mesmo tempo, o site pergunta qual versão fica valendo.

## Backup

No menu do mês, **Salvar backup de todas as edições** baixa um arquivo `.json` com tudo o que está no navegador. **Restaurar backup…** (ou arrastar o arquivo para a janela) traz de volta.

## Como está organizado

- `index.html`: o editor.
- `assets/config.js`: o repositório e o branch onde as edições são salvas.
- `assets/fontes.js`: as fontes (Alegreya e Alegreya Sans), embutidas.
- `assets/imagem-padrao.js`: a imagem original, usada em "Original".
- `assets/icones/`, `manifest.webmanifest` e `sw.js`: ícone, instalação como app e modo sem internet.
- As edições ficam no branch **`dados`** (`edicoes/AAAA-MM.json`, `imagens/`, `listas/` e `acesso.json`). Cada salvamento é um commit lá, então o site no `main` não precisa ser reconstruído a cada mudança.
- Os discursos e as aulas são lidos direto do navegador, na mesma API JSON que o site da Igreja usa (`/study/api/v3/language-pages/type/content`). Ela aceita chamadas de outros sites, mas o cache dela guarda a resposta com o site de quem pediu primeiro; por isso cada pedido escreve algumas letras do endereço como `%xx`. Se a Igreja mudar essa API, a importação para de funcionar, mas as listas já importadas continuam no branch `dados`.
