# Informativo do Quórum de Élderes

Editor do informativo mensal. A página é editada no próprio informativo e exportada como imagem (PNG) ou PDF.

- **Site:** https://caiomourasud.github.io/quorum-news/
- **No computador:** abra o `index.html` no Chrome (mantenha a pasta `assets` junto).

Quem abre o site vê o informativo e pode baixar o PNG ou o PDF. Para editar, clique em **Entrar para editar**.

## Entrar para editar

Na primeira vez, cada pessoa informa **o nome** (aparece no histórico ao lado do que ela mudar) e **a chave de acesso**. Os dois ficam guardados só naquele navegador. Para trocar o nome ou sair, clique no seu nome na barra de cima.

A chave existe porque o site é público: sem ela, qualquer pessoa poderia alterar o informativo. O dono do repositório cria uma chave para cada pessoa por [este link](https://github.com/settings/personal-access-tokens/new?name=Informativo&description=Editar+o+Informativo+do+Qu%C3%B3rum+(quorum-news)&target_name=caiomourasud&expires_in=366&contents=write), que já vem preenchido com nome, validade de 1 ano e a permissão. Falta só:

- **Repository access:** Only select repositories → `quorum-news`
- **Generate token**, e copiar a chave (começa com `github_pat_`)

Com uma chave por pessoa, dá para revogar a de alguém sem afetar as outras. Trate a chave como senha.

## Todo mês

1. Clique em **Novo mês**. É criada a edição do mês seguinte à mais recente, como cópia dela, com todos os domingos em Discursos e em Vem, e Segue-me. Esses quadros e os Aniversariantes começam vazios.
2. Clique em qualquer texto da página e digite. **Enter** termina a edição. Acima do texto aparece uma barra para mudar fonte, tamanho, negrito, itálico, sublinhado, cor, destaque e link, ou para limpar a formatação. Atalhos: ⌘B, ⌘I, ⌘U e ⌘K (link).
3. Passe o mouse sobre um quadro para ver os botões **+** (adicionar) e **×** (remover). Itens vazios não saem no informativo.
4. Para trocar a foto, passe o mouse sobre ela e clique em **Trocar imagem** (ou arraste um arquivo para a janela, ou cole com ⌘V). Arraste a foto para ajustar o enquadramento.
5. Em **Mensagens** estão os textos prontos para o WhatsApp de cada domingo, com a data e o link da aula da escola dominical e do discurso do 2º horário. Se faltar um link, cole ali mesmo: ele entra também no informativo.
6. Exporte com **Baixar imagem** (PNG 1600×2240, bom para o WhatsApp) ou **PDF / Imprimir** (escolha "Salvar como PDF"). Os links funcionam no PDF.

Se aparecer o aviso vermelho, o conteúdo não coube na página: encurte um texto ou remova um item.

## Salvamento, histórico e desfazer

- **Tudo é salvo sozinho**, alguns segundos depois que você para de digitar. O status ao lado do mês mostra "Salvando…" e depois "Salvo às…". Quem abrir o site já vê a versão nova.
- **⌘Z / Ctrl+Z** desfaz e **⌘⇧Z** refaz (ou use as setas curvas na barra).
- **Histórico** mostra cada versão salva, com a hora e o nome de quem salvou. Clique numa versão para ver como estava e, se quiser, **Restaurar esta versão**.
- Se duas pessoas mexerem na mesma edição ao mesmo tempo, o site pergunta qual versão fica valendo.
- **Os aniversariantes não são salvos no GitHub.** São dados pessoais e o repositório é público: eles ficam só no navegador de quem preenche e saem normalmente no PNG e no PDF.

## Backup

No menu do mês, **Salvar backup de todas as edições** baixa um arquivo `.json` com tudo o que está no navegador, inclusive os aniversariantes. **Restaurar backup…** (ou arrastar o arquivo para a janela) traz de volta.

## Como está organizado

- `index.html`: o editor.
- `assets/config.js`: o repositório e o branch onde as edições são salvas.
- `assets/fontes.js`: as fontes (Alegreya e Alegreya Sans), embutidas.
- `assets/imagem-padrao.js`: a imagem original, usada em "Original".
- As edições ficam no branch **`dados`** (`edicoes/AAAA-MM.json` e `imagens/`). Cada salvamento é um commit lá, então o site no `main` não precisa ser reconstruído a cada mudança.
