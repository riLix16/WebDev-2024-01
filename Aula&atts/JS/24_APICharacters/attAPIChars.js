        // URL da API do Naruto
        const baseUrl = 'https://dattebayoapi.onrender.com';

        // Elementos do DOM
        const clanSelect = document.getElementById('clanSelect');
        const characterSelect = document.getElementById('characterSelect');
        const characterInfo = document.getElementById('characterInfo');
        const characterImage = document.getElementById('characterImage');
        const characterId = document.getElementById('characterId');
        const characterName = document.getElementById('characterName');
        const characterBirthday = document.getElementById('characterBirthday');
        const characterSex = document.getElementById('characterSex');
        const characterBloodType = document.getElementById('characterBloodType');

        // Função para carregar os Clans
        async function loadClans() {
            try {
                const response = await fetch(`${baseUrl}/clans`);
                const clans = await response.json();
                clans.forEach(clan => {
                    const option = document.createElement('option');
                    option.value = clan.id;
                    option.textContent = clan.name;
                    clanSelect.appendChild(option);
                });
            } catch (error) {
                console.error('Erro ao carregar os Clans:', error);
            }
        }

        // Função para carregar os Characters de um Clan
        async function loadCharacters(clanId) {
            try {
                const response = await fetch(`${baseUrl}/characters/ids?clanId=${clanId}`);
                const characters = await response.json();
                characterSelect.innerHTML = '<option value="">Selecione um Ninja</option>';
                characters.forEach(character => {
                    const option = document.createElement('option');
                    option.value = character.id;
                    option.textContent = character.name;
                    characterSelect.appendChild(option);
                });
                characterSelect.disabled = false;
            } catch (error) {
                console.error('Erro ao carregar os Characters:', error);
            }
        }

        // Função para exibir as informações de um Character
        async function showCharacterInfo(characterId) {
            try {
                const response = await fetch(`${baseUrl}/characters/${characterId}`);
                const character = await response.json();
                characterImage.src = character.image;
                characterId.textContent = character.id;
                characterName.textContent = character.name;
                characterBirthday.textContent = character.birthday;
                characterSex.textContent = character.sex;
                characterBloodType.textContent = character.bloodType;
                characterInfo.style.display = 'block';
            } catch (error) {
                console.error('Erro ao carregar as informações do Character:', error);
            }
        }

        // Eventos
        clanSelect.addEventListener('change', () => {
            const clanId = clanSelect.value;
            if (clanId) {
                loadCharacters(clanId);
                characterInfo.style.display = 'none';
                characterSelect.disabled = true;
            }
        });

        characterSelect.addEventListener('change', () => {
            const characterId = characterSelect.value;
            if (characterId) {
                showCharacterInfo(characterId);
            } else {
                characterInfo.style.display = 'none';
            }
        });

        // Carregar os Clans ao carregar a página
        loadClans();