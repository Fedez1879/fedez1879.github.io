class DemoThesaurus extends Thesaurus{
	commonPatterns = {
		wall: i18n.DemoThesaurus.commonPatterns.wall,
		floor: i18n.DemoThesaurus.commonPatterns.floor,
		ceiling: i18n.DemoThesaurus.commonPatterns.ceiling,
	}

	constructor(parent){
		super(parent),
		this.defaultMessages.BE_SERIOUS = "Sii serio!"
		this.defaultMessages.DONE = "Ok."
			
		this.loadCommands();
		this.loadVerbs();
		
	}
	
	loadVerbs(){
		super.loadVerbs()
		this.verbs = {
			...this.verbs, 
			...{
				move:{
					pattern: `sposta|muovi`,
					defaultMessage: i18n.Thesaurus.verbs.push.defaultMessage
				},
				lift:{
					pattern: `alza|solleva`,
					defaultMessage: i18n.Thesaurus.verbs.push.defaultMessage
				},
				read:{
					pattern: `leggi`,
					defaultMessage: this.defaultMessages.PREFER_NOT
				},
				putInto: {
					pattern: "(infila|inserisci) (.+) in (.+)",
					defaultMessage: this.defaultMessages.BE_SERIOUS,
					inventory: true,
					complex: true
				},
				break: {
					pattern: "rompi|distruggi|spacca",
					defaultMessage: this.defaultMessages.BE_SERIOUS
				},
				wear: {
					pattern: `indossa`,
					defaultMessage: this.defaultMessages.BE_SERIOUS
				},
				bringCloser: {
					pattern: `avvicina (.+)? a (.+)`,
					defaultMessage: this.defaultMessages.NOTHING_HAPPENS,
					inventory: true,
					complex: true
				}
			}
		};
	}

	loadCommands(){
		super.loadCommands()
		this.commands = {
			...this.commands,
			...{
				exit: {
					pattern: `esci|scappa|fuggi`,
					defaultMessage: `Vorrei, ma sono bloccato qui.`
				},
				help: {
					pattern: `aiuto`,
					defaultMessage: () => this.parent.help(this.parent.currentRoom)
				},
				run: {
					pattern: `corri`,
					defaultMessage: `Non serve a niente`
				}
			}
		}
	}

}
