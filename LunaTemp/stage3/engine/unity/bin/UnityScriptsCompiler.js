if ( TRACE ) { TRACE( JSON.parse( '["BrickColorExtension#GenerateBrickColor","BrickColorExtension#GenerateBrickType","BrickColorExtension#Brick","Ctrl_Ball#init","Ctrl_Ball#Spawn","Ctrl_Ball#OnTriggerEnter2D","Ctrl_Ball#OnCollisionEnter2D","Ctrl_BotBorder#init","Ctrl_BotBorder#OnTriggerEnter2D","Ctrl_BotBorder#Start","Ctrl_BotBorder#Update","Ctrl_BotBorder#DisableTriggerTemporary","Ctrl_Brick#Scores#get","Ctrl_Brick#init","Ctrl_Brick#Start","Ctrl_Brick#ReceiveDamage","Ctrl_Brick#DestroyBrick","Ctrl_GamePlay#init","Ctrl_GamePlay#BallLost","Ctrl_GamePlay#SpawnRandomPowerUp","Ctrl_GamePlay#StartLevel","Ctrl_GamePlay#DelayedSpawnBall","Ctrl_GamePlay#InstantSpawnBall","Ctrl_GamePlay#SpawnBallCoroutine","Ctrl_GamePlay#BrickDestroyed","Ctrl_GamePlay#GameOver","Ctrl_GamePlay#PowerUpTrigger","Ctrl_GamePlay#ClearLevel","Ctrl_LevelLayout#init","Ctrl_LevelLayout#GenerateBricks","Ctrl_Paddle#init","Ctrl_Paddle#init","Ctrl_Paddle#Awake","Ctrl_Paddle#Update","Ctrl_Paddle#Reset","Ctrl_PowerUp#Init","Ctrl_PowerUp#OnTriggerEnter2D","Ctrl_UIGamePlay#init","Ctrl_UIGamePlay#Awake","Ctrl_UIGamePlay#OnClickToNextLevel","Ctrl_UIGamePlay#OnClickToMainMenu","Ctrl_UIGamePlay#UpdateUI","Ctrl_UIGamePlay#HideResultPanel","Ctrl_UIGamePlay#ShowResultPanel","Ctrl_UIMainMenu#init","Ctrl_UIMainMenu#Awake","Ctrl_UIMainMenu#Start","Ctrl_UIMainMenu#Update","Ctrl_UIMainMenu#OnClickBtnPlay","Ctrl_UIMainMenu#OnClickBtnQuit","Ctrl_UIMainMenu#Reset","GameManager#Instance#get","GameManager#init","GameManager#PlayerData#get","GameManager#SpawnRandomPowerUp","GameManager#Awake","GameManager#GoToNextLevel","GameManager#Play","GameManager#SceneManager_sceneLoaded","GameManager#GoToMainMenu","GameManager#LiveLost","GameManager#BrickDestoryed","GameManager#LevelCompleted","GameManager#GetHighScore","GameManager#GetExtraLife","Hlpr_ResizeSpriteFullScreen#init","Hlpr_ResizeSpriteFullScreen#Start","Hlpr_ResizeSpriteFullScreen#Resize","Hlpr_ScreenSize#GetScreenToWorldHeight#get","Hlpr_ScreenSize#GetScreenToWorldWidth#get","LevelEditor#init","LevelEditor#Start","LevelEditor#Update","LevelEditor#ResetLevel","So_LevelData#init"]' ) ); }
/**
 * @version 1.0.9540.3192
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BrickColorExtension start.*/
    Bridge.define("BrickColorExtension", {
        statics: {
            methods: {
                /*BrickColorExtension.GenerateBrickColor:static start.*/
                GenerateBrickColor: function (brickColor) {
if ( TRACE ) { TRACE( "BrickColorExtension#GenerateBrickColor", this ); }

                    switch (brickColor) {
                        case E_BrickType.ToughBrick: 
                            return new pc.Color( 1, 0, 0, 1 );
                        case E_BrickType.NormalBrick: 
                            return new pc.Color( 0, 1, 0, 1 );
                        case E_BrickType.PowerUpBrick: 
                            return new pc.Color( 0, 0, 1, 1 );
                        case E_BrickType.PassThroughBrick: 
                            return new pc.Color( 1, 1, 0, 1 );
                        default: 
                            return new pc.Color( 1, 1, 1, 1 );
                    }

                },
                /*BrickColorExtension.GenerateBrickColor:static end.*/

                /*BrickColorExtension.GenerateBrickType:static start.*/
                GenerateBrickType: function (brickType) {
if ( TRACE ) { TRACE( "BrickColorExtension#GenerateBrickType", this ); }

                    switch (brickType) {
                        case E_BrickType.ToughBrick: 
                            return BrickColorExtension.Brick("Pfb_BrickTough");
                        case E_BrickType.NormalBrick: 
                            return BrickColorExtension.Brick("Pfb_BrickNormal");
                        case E_BrickType.PowerUpBrick: 
                            return BrickColorExtension.Brick("Pfb_BrickPowerUp");
                        case E_BrickType.PassThroughBrick: 
                            return BrickColorExtension.Brick("Pfb_BrickPassThrough");
                        default: 
                            return BrickColorExtension.Brick("Pfb_BrickNormal");
                    }
                },
                /*BrickColorExtension.GenerateBrickType:static end.*/

                /*BrickColorExtension.Brick:static start.*/
                Brick: function (name) {
if ( TRACE ) { TRACE( "BrickColorExtension#Brick", this ); }

                    return UnityEngine.Resources.Load(UnityEngine.GameObject, System.String.format("Prefabs/{0}", [name]));
                },
                /*BrickColorExtension.Brick:static end.*/


            }
        }
    });
    /*BrickColorExtension end.*/

    /*Ctrl_Ball start.*/
    Bridge.define("Ctrl_Ball", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _ballMaterial: null,
            _rb: null,
            _ballStartingPosition: null,
            _ballDamage: 0,
            _ballSpeed: 0,
            _minXRange: 0,
            _maxXRange: 0,
            _minYRange: 0,
            _maxYRange: 0,
            _directionDeflectionThreshold: 0,
            _minXDeflectionRange: 0,
            _maxXDeflectionRange: 0,
            _minYDeflectionRange: 0,
            _maxYDeflectionRange: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ctrl_Ball#init", this ); }

                this._ballStartingPosition = new UnityEngine.Vector2();
                this._ballStartingPosition = new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ).scale( 8.5 );
                this._ballDamage = 1;
                this._ballSpeed = 15.0;
                this._minXRange = -0.2;
                this._maxXRange = 0.2;
                this._minYRange = 0.6;
                this._maxYRange = 0.8;
                this._directionDeflectionThreshold = 0.05;
                this._minXDeflectionRange = 0.25;
                this._maxXDeflectionRange = 0.5;
                this._minYDeflectionRange = 0.5;
                this._maxYDeflectionRange = 1.0;
            }
        },
        methods: {
            /*Ctrl_Ball.Spawn start.*/
            Spawn: function () {
if ( TRACE ) { TRACE( "Ctrl_Ball#Spawn", this ); }

                this.gameObject.SetActive(true);
                this.transform.localScale = new pc.Vec3( 0.3, 0.3, 0.3 );
                this.transform.position = UnityEngine.Vector3.FromVector2(this._ballStartingPosition.$clone());
                var x = UnityEngine.Random.Range$1(this._minXRange, this._maxXRange);
                var y = UnityEngine.Random.Range$1(this._minYRange, this._maxYRange);
                this._rb.velocity = (new pc.Vec2( x, y )).clone().normalize().$clone().scale( this._ballSpeed );
            },
            /*Ctrl_Ball.Spawn end.*/

            /*Ctrl_Ball.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "Ctrl_Ball#OnTriggerEnter2D", this ); }

                var brickControl = collision.gameObject.GetComponent(Ctrl_Brick);
                if (UnityEngine.MonoBehaviour.op_Inequality(brickControl, null)) {
                    brickControl.ReceiveDamage(this._ballDamage);
                }
            },
            /*Ctrl_Ball.OnTriggerEnter2D end.*/

            /*Ctrl_Ball.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "Ctrl_Ball#OnCollisionEnter2D", this ); }

                var brickControl = collision.gameObject.GetComponent(Ctrl_Brick);
                if (UnityEngine.MonoBehaviour.op_Inequality(brickControl, null)) {
                    brickControl.ReceiveDamage(this._ballDamage);
                }

                if (Math.abs(this._rb.velocity.x) <= this._directionDeflectionThreshold) {
                    if (this._rb.position.x < 0) {
                        this._rb.velocity = new pc.Vec2( UnityEngine.Random.Range$1(this._minXDeflectionRange, this._maxXDeflectionRange), this._rb.velocity.y );
                    } else {
                        this._rb.velocity = new pc.Vec2( -1 * UnityEngine.Random.Range$1(this._minXDeflectionRange, this._maxXDeflectionRange), this._rb.velocity.y );
                    }
                }
                if (Math.abs(this._rb.velocity.y) <= 0.05) {
                    if (this._rb.position.y < 0) {
                        this._rb.velocity = new pc.Vec2( this._rb.velocity.x, UnityEngine.Random.Range$1(this._minYDeflectionRange, this._maxYDeflectionRange) );
                    } else {
                        this._rb.velocity = new pc.Vec2( this._rb.velocity.x, -1.0 * UnityEngine.Random.Range$1(this._minYDeflectionRange, this._maxYDeflectionRange) );
                    }
                }
                this._rb.velocity = this._rb.velocity.clone().normalize().$clone().scale( this._ballSpeed );
            },
            /*Ctrl_Ball.OnCollisionEnter2D end.*/


        }
    });
    /*Ctrl_Ball end.*/

    /*Ctrl_BotBorder start.*/
    Bridge.define("Ctrl_BotBorder", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _boxCollider: null,
            _gamePlayControl: null,
            _goImmunityBar: null,
            _triggerDisableTimer: 0,
            _timer: 0,
            _startCountdown: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ctrl_BotBorder#init", this ); }

                this._triggerDisableTimer = 3.0;
                this._startCountdown = false;
            }
        },
        methods: {
            /*Ctrl_BotBorder.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "Ctrl_BotBorder#OnTriggerEnter2D", this ); }

                var ballControl = collision.gameObject.GetComponent(Ctrl_Ball);
                if (UnityEngine.MonoBehaviour.op_Inequality(ballControl, null)) {
                    this._gamePlayControl.BallLost(ballControl);
                }
            },
            /*Ctrl_BotBorder.OnTriggerEnter2D end.*/

            /*Ctrl_BotBorder.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Ctrl_BotBorder#Start", this ); }

                this._timer = 0;
                this._startCountdown = false;
                if (UnityEngine.GameObject.op_Inequality(this._goImmunityBar, null)) {
                    this._goImmunityBar.SetActive(false);
                }
            },
            /*Ctrl_BotBorder.Start end.*/

            /*Ctrl_BotBorder.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Ctrl_BotBorder#Update", this ); }

                if (this._startCountdown && UnityEngine.Time.time > this._timer) {
                    this._startCountdown = false;
                    this._boxCollider.isTrigger = true;
                    if (UnityEngine.GameObject.op_Inequality(this._goImmunityBar, null)) {
                        this._goImmunityBar.SetActive(false);
                    }
                }
            },
            /*Ctrl_BotBorder.Update end.*/

            /*Ctrl_BotBorder.DisableTriggerTemporary start.*/
            DisableTriggerTemporary: function () {
if ( TRACE ) { TRACE( "Ctrl_BotBorder#DisableTriggerTemporary", this ); }

                this._boxCollider.isTrigger = false;
                this._startCountdown = true;
                this._timer = UnityEngine.Time.time + this._triggerDisableTimer;
                if (UnityEngine.GameObject.op_Inequality(this._goImmunityBar, null)) {
                    this._goImmunityBar.SetActive(true);
                }
            },
            /*Ctrl_BotBorder.DisableTriggerTemporary end.*/


        }
    });
    /*Ctrl_BotBorder end.*/

    /*Ctrl_Brick start.*/
    Bridge.define("Ctrl_Brick", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _sr: null,
            _hitPoints: 0,
            _scores: 0,
            _powerUpChance: 0,
            _currentHitPoints: 0
        },
        props: {
            Scores: {
                get: function () {
if ( TRACE ) { TRACE( "Ctrl_Brick#Scores#get", this ); }

                    return this._scores;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ctrl_Brick#init", this ); }

                this._powerUpChance = 0;
            }
        },
        methods: {
            /*Ctrl_Brick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Ctrl_Brick#Start", this ); }

                this._currentHitPoints = this._hitPoints;
            },
            /*Ctrl_Brick.Start end.*/

            /*Ctrl_Brick.ReceiveDamage start.*/
            ReceiveDamage: function (damage) {
if ( TRACE ) { TRACE( "Ctrl_Brick#ReceiveDamage", this ); }

                this._currentHitPoints = (this._currentHitPoints - damage) | 0;

                if (this._currentHitPoints <= 0) {
                    this.DestroyBrick();
                    if (this._powerUpChance > 0 && UnityEngine.Random.Range$1(0.0, 100.0) <= this._powerUpChance) {
                        GameManager.Instance.SpawnRandomPowerUp(this.transform.position);
                    }
                } else {
                    var colorPercent = (this._currentHitPoints / this._hitPoints);
                    var newColor = new pc.Color( this._sr.color.r, this._sr.color.g, this._sr.color.b, colorPercent );
                    this._sr.color = newColor.$clone();
                }
            },
            /*Ctrl_Brick.ReceiveDamage end.*/

            /*Ctrl_Brick.DestroyBrick start.*/
            DestroyBrick: function () {
if ( TRACE ) { TRACE( "Ctrl_Brick#DestroyBrick", this ); }

                GameManager.Instance.BrickDestoryed(this);
            },
            /*Ctrl_Brick.DestroyBrick end.*/


        }
    });
    /*Ctrl_Brick end.*/

    /*Ctrl_GamePlay start.*/
    Bridge.define("Ctrl_GamePlay", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            TfRightX: null,
            _tfPowerUpParent: null,
            _bricksParent: null,
            _ballsParent: null,
            _levelLayoutControl: null,
            _uiControl: null,
            _ballControl: null,
            _paddleControl: null,
            _botBorderControl: null,
            _powerUpExtraLiveControl: null,
            _powerUpExtraBallControl: null,
            _powerUpBallImmunityControl: null,
            _extraBallChance: 0,
            _ballsImmunityChance: 0,
            _extraBallMultiplier: 0,
            _bricks: null,
            _balls: null,
            _currentLevel: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#init", this ); }

                this._extraBallChance = 75;
                this._ballsImmunityChance = 20;
                this._extraBallMultiplier = 3;
            }
        },
        methods: {
            /*Ctrl_GamePlay.BallLost start.*/
            BallLost: function (ballControl) {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#BallLost", this ); }

                this._balls.remove(ballControl);
                UnityEngine.MonoBehaviour.Destroy(ballControl.gameObject);
                if (this._balls.Count <= 0) {
                    GameManager.Instance.LiveLost();
                    this._uiControl.UpdateUI();
                }
            },
            /*Ctrl_GamePlay.BallLost end.*/

            /*Ctrl_GamePlay.SpawnRandomPowerUp start.*/
            SpawnRandomPowerUp: function (position) {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#SpawnRandomPowerUp", this ); }

                var rng = UnityEngine.Random.Range(0, 101);
                var powerUpType = new E_PowerUpType();
                if (rng < this._extraBallChance) {
                    powerUpType = E_PowerUpType.ExtraBall;
                } else if (rng < (((this._extraBallChance + this._ballsImmunityChance) | 0))) {
                    powerUpType = E_PowerUpType.BallsImmunity;
                } else {
                    powerUpType = E_PowerUpType.ExtraLive;
                }

                var powerUpContrl;
                switch (powerUpType) {
                    case E_PowerUpType.ExtraLive: 
                        powerUpContrl = UnityEngine.Object.Instantiate$3(Ctrl_PowerUp, this._powerUpExtraLiveControl, position, pc.Quat.IDENTITY.clone(), this._tfPowerUpParent);
                        break;
                    case E_PowerUpType.ExtraBall: 
                        powerUpContrl = UnityEngine.Object.Instantiate$3(Ctrl_PowerUp, this._powerUpExtraBallControl, position, pc.Quat.IDENTITY.clone(), this._tfPowerUpParent);
                        break;
                    case E_PowerUpType.BallsImmunity: 
                    default: 
                        powerUpContrl = UnityEngine.Object.Instantiate$3(Ctrl_PowerUp, this._powerUpBallImmunityControl, position, pc.Quat.IDENTITY.clone(), this._tfPowerUpParent);
                        break;
                }
                powerUpContrl.Init(this);
                powerUpContrl.gameObject.SetActive(true);
            },
            /*Ctrl_GamePlay.SpawnRandomPowerUp end.*/

            /*Ctrl_GamePlay.StartLevel start.*/
            StartLevel: function (level) {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#StartLevel", this ); }

                this._currentLevel = level;
                this._uiControl.UpdateUI();
                this._uiControl.HideResultPanel();
                this.ClearLevel();
                this._levelLayoutControl.Level = this._currentLevel;
                this._bricks = this._levelLayoutControl.GenerateBricks();
                this.DelayedSpawnBall();
            },
            /*Ctrl_GamePlay.StartLevel end.*/

            /*Ctrl_GamePlay.DelayedSpawnBall start.*/
            DelayedSpawnBall: function () {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#DelayedSpawnBall", this ); }

                this.StartCoroutine$2("SpawnBallCoroutine");
            },
            /*Ctrl_GamePlay.DelayedSpawnBall end.*/

            /*Ctrl_GamePlay.InstantSpawnBall start.*/
            InstantSpawnBall: function () {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#InstantSpawnBall", this ); }

                var spawnedBall = UnityEngine.Object.Instantiate$1(Ctrl_Ball, this._ballControl, this._ballsParent.transform, true);
                spawnedBall.Spawn();
                this._balls.add(spawnedBall);
            },
            /*Ctrl_GamePlay.InstantSpawnBall end.*/

            /*Ctrl_GamePlay.SpawnBallCoroutine start.*/
            SpawnBallCoroutine: function () {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#SpawnBallCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    spawnedBall,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    spawnedBall = UnityEngine.Object.Instantiate$1(Ctrl_Ball, this._ballControl, this._ballsParent.transform, true);
                                        spawnedBall.Spawn();
                                        this._balls.add(spawnedBall);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Ctrl_GamePlay.SpawnBallCoroutine end.*/

            /*Ctrl_GamePlay.BrickDestroyed start.*/
            BrickDestroyed: function (destroyedBrick) {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#BrickDestroyed", this ); }

                this._uiControl.UpdateUI();
                this._bricks.remove(destroyedBrick);
                UnityEngine.MonoBehaviour.Destroy(destroyedBrick.gameObject);

                if (this._bricks.Count <= 0) {
                    var result = GameManager.Instance.LevelCompleted();
                    this.ClearLevel();
                    this._uiControl.ShowResultPanel(result);
                }
            },
            /*Ctrl_GamePlay.BrickDestroyed end.*/

            /*Ctrl_GamePlay.GameOver start.*/
            GameOver: function () {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#GameOver", this ); }

                this.ClearLevel();
                this._uiControl.ShowResultPanel(E_ResultType.GameOver);
            },
            /*Ctrl_GamePlay.GameOver end.*/

            /*Ctrl_GamePlay.PowerUpTrigger start.*/
            PowerUpTrigger: function (powerType) {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#PowerUpTrigger", this ); }

                switch (powerType) {
                    case E_PowerUpType.ExtraLive: 
                        GameManager.Instance.GetExtraLife();
                        this._uiControl.UpdateUI();
                        break;
                    case E_PowerUpType.ExtraBall: 
                        for (var i = 0; i < this._extraBallMultiplier; i = (i + 1) | 0) {
                            this.InstantSpawnBall();
                        }
                        break;
                    case E_PowerUpType.BallsImmunity: 
                        this._botBorderControl.DisableTriggerTemporary();
                        break;
                    default: 
                        break;
                }
            },
            /*Ctrl_GamePlay.PowerUpTrigger end.*/

            /*Ctrl_GamePlay.ClearLevel start.*/
            ClearLevel: function () {
if ( TRACE ) { TRACE( "Ctrl_GamePlay#ClearLevel", this ); }

                if (this._balls == null) {
                    this._balls = new (System.Collections.Generic.List$1(Ctrl_Ball)).ctor();
                }
                for (var i = 0; i < this._balls.Count; i = (i + 1) | 0) {
                    UnityEngine.MonoBehaviour.Destroy(this._balls.getItem(i).gameObject);
                }
                this._balls.clear();

                if (this._bricks == null) {
                    this._bricks = new (System.Collections.Generic.List$1(Ctrl_Brick)).ctor();
                }
                for (var i1 = 0; i1 < this._bricks.Count; i1 = (i1 + 1) | 0) {
                    UnityEngine.MonoBehaviour.Destroy(this._bricks.getItem(i1).gameObject);
                }

                for (var i2 = 0; i2 < this._tfPowerUpParent.childCount; i2 = (i2 + 1) | 0) {
                    UnityEngine.MonoBehaviour.Destroy(this._tfPowerUpParent.GetChild(i2).gameObject);
                }

                this._bricks.clear();
                this._ballControl.gameObject.SetActive(false);
                this._powerUpExtraLiveControl.gameObject.SetActive(false);
                this._powerUpExtraBallControl.gameObject.SetActive(false);
                this._powerUpBallImmunityControl.gameObject.SetActive(false);
                this._paddleControl.Reset();
                this.StopAllCoroutines();
            },
            /*Ctrl_GamePlay.ClearLevel end.*/


        }
    });
    /*Ctrl_GamePlay end.*/

    /*Ctrl_LevelLayout start.*/
    Bridge.define("Ctrl_LevelLayout", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Level: null,
            _bricks: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ctrl_LevelLayout#init", this ); }

                this._bricks = new (System.Collections.Generic.List$1(Ctrl_Brick)).ctor();
            }
        },
        methods: {
            /*Ctrl_LevelLayout.GenerateBricks start.*/
            GenerateBricks: function () {
if ( TRACE ) { TRACE( "Ctrl_LevelLayout#GenerateBricks", this ); }

                for (var i = 0; i < this._bricks.Count; i = (i + 1) | 0) {
                    UnityEngine.Object.Destroy(this._bricks.getItem(i));
                }
                this._bricks.clear();
                for (var i1 = 0; i1 < this.Level.x.Count; i1 = (i1 + 1) | 0) {
                    var pos = new pc.Vec2( this.Level.x.getItem(i1), this.Level.y.getItem(i1) );
                    var go = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, BrickColorExtension.GenerateBrickType(this.Level.BrickColorList.getItem(i1)), UnityEngine.Vector3.FromVector2(pos), pc.Quat.IDENTITY.clone());
                    go.transform.SetParent(this.gameObject.transform, false);
                    this._bricks.add(go.GetComponent(Ctrl_Brick));
                }
                return this._bricks;
            },
            /*Ctrl_LevelLayout.GenerateBricks end.*/


        }
    });
    /*Ctrl_LevelLayout end.*/

    /*Ctrl_Paddle start.*/
    Bridge.define("Ctrl_Paddle", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                FLT_PADDLE_HEIGHT: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Ctrl_Paddle#init", this ); }

                    this.FLT_PADDLE_HEIGHT = 0.5;
                }
            }
        },
        fields: {
            _gamePlayControl: null,
            _paddleMaterial: null,
            _paddleStartingPosition: null,
            _paddleWidthRatioToScreen: 0,
            _sr: null,
            _rb: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ctrl_Paddle#init", this ); }

                this._paddleStartingPosition = new UnityEngine.Vector2();
                this._paddleStartingPosition = new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ).scale( 9.0 );
                this._paddleWidthRatioToScreen = 0.3;
            }
        },
        methods: {
            /*Ctrl_Paddle.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Ctrl_Paddle#Awake", this ); }

                UnityEngine.Input.multiTouchEnabled = false;
                this._rb = this.GetComponent(UnityEngine.Rigidbody2D);
                if (UnityEngine.Component.op_Equality(this._rb, null)) {
                    this._rb = this.gameObject.AddComponent(UnityEngine.Rigidbody2D);
                    if (this._paddleMaterial != null) {
                        this._rb.sharedMaterial = this._paddleMaterial;
                    }
                    this._rb.bodyType = UnityEngine.RigidbodyType2D.Kinematic;
                }
                this._sr = this.GetComponent(UnityEngine.SpriteRenderer);

                var paddleWidth = Hlpr_ScreenSize.GetScreenToWorldWidth * this._paddleWidthRatioToScreen;
                this.transform.localScale = UnityEngine.Vector3.FromVector2(new pc.Vec2( paddleWidth, Ctrl_Paddle.FLT_PADDLE_HEIGHT ));
            },
            /*Ctrl_Paddle.Awake end.*/

            /*Ctrl_Paddle.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Ctrl_Paddle#Update", this ); }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    var worldPointVector = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                    var maxDistance = this._gamePlayControl.TfRightX.position.x - this._sr.bounds.halfExtents.x;
                    worldPointVector.x = Math.max(-1 * maxDistance, Math.min(worldPointVector.x, maxDistance));
                    this.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( worldPointVector.x, this.transform.position.y ));
                }
            },
            /*Ctrl_Paddle.Update end.*/

            /*Ctrl_Paddle.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "Ctrl_Paddle#Reset", this ); }

                this.transform.position = UnityEngine.Vector3.FromVector2(this._paddleStartingPosition.$clone());
            },
            /*Ctrl_Paddle.Reset end.*/


        }
    });
    /*Ctrl_Paddle end.*/

    /*Ctrl_PowerUp start.*/
    Bridge.define("Ctrl_PowerUp", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _sr: null,
            _powerUpType: 0,
            _gameControl: null
        },
        methods: {
            /*Ctrl_PowerUp.Init start.*/
            Init: function (gamePlay) {
if ( TRACE ) { TRACE( "Ctrl_PowerUp#Init", this ); }

                this._gameControl = gamePlay;
                this.transform.localScale = new pc.Vec3( 0.125, 0.125, 1.0 );
            },
            /*Ctrl_PowerUp.Init end.*/

            /*Ctrl_PowerUp.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "Ctrl_PowerUp#OnTriggerEnter2D", this ); }

                var paddle = collision.gameObject.GetComponent(Ctrl_Paddle);
                if (UnityEngine.MonoBehaviour.op_Inequality(paddle, null)) {
                    this._gameControl.PowerUpTrigger(this._powerUpType);
                }
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*Ctrl_PowerUp.OnTriggerEnter2D end.*/


        }
    });
    /*Ctrl_PowerUp end.*/

    /*Ctrl_UIGamePlay start.*/
    Bridge.define("Ctrl_UIGamePlay", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                STRFMT_LIVES: null,
                STRFMT_SCORES: null,
                STRFMT_LEVEL: null,
                STR_PLAYER_WIN: null,
                STR_LEVEL_COMPLETED: null,
                STR_PLAYER_LOSE: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Ctrl_UIGamePlay#init", this ); }

                    this.STRFMT_LIVES = "Lives : {0}";
                    this.STRFMT_SCORES = "Scores : {0}";
                    this.STRFMT_LEVEL = "Level : {0}";
                    this.STR_PLAYER_WIN = "All levels cleared.";
                    this.STR_LEVEL_COMPLETED = "Level Completed.";
                    this.STR_PLAYER_LOSE = "Game Over.";
                }
            }
        },
        fields: {
            _txtLives: null,
            _txtScores: null,
            _txtLevel: null,
            _goResultPanel: null,
            _txtResult: null,
            _txtResultPanelScore: null,
            _btnToMainMenu: null,
            _btnToNextLevel: null,
            _btnBack: null
        },
        methods: {
            /*Ctrl_UIGamePlay.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Ctrl_UIGamePlay#Awake", this ); }

                this._btnToMainMenu.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickToMainMenu));
                this._btnBack.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickToMainMenu));
                this._btnToNextLevel.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickToNextLevel));
            },
            /*Ctrl_UIGamePlay.Awake end.*/

            /*Ctrl_UIGamePlay.OnClickToNextLevel start.*/
            OnClickToNextLevel: function () {
if ( TRACE ) { TRACE( "Ctrl_UIGamePlay#OnClickToNextLevel", this ); }

                GameManager.Instance.GoToNextLevel();
            },
            /*Ctrl_UIGamePlay.OnClickToNextLevel end.*/

            /*Ctrl_UIGamePlay.OnClickToMainMenu start.*/
            OnClickToMainMenu: function () {
if ( TRACE ) { TRACE( "Ctrl_UIGamePlay#OnClickToMainMenu", this ); }

                GameManager.Instance.GoToMainMenu();
            },
            /*Ctrl_UIGamePlay.OnClickToMainMenu end.*/

            /*Ctrl_UIGamePlay.UpdateUI start.*/
            UpdateUI: function () {
if ( TRACE ) { TRACE( "Ctrl_UIGamePlay#UpdateUI", this ); }

                this._txtLives.text = System.String.format(Ctrl_UIGamePlay.STRFMT_LIVES, [Bridge.box(GameManager.Instance.PlayerData.Lives, System.Int32)]);
                this._txtScores.text = System.String.format(Ctrl_UIGamePlay.STRFMT_SCORES, [Bridge.box(GameManager.Instance.PlayerData.Scores, System.Int32)]);
                this._txtLevel.text = System.String.format(Ctrl_UIGamePlay.STRFMT_LEVEL, [Bridge.box(GameManager.Instance.PlayerData.Level, System.Int32)]);
            },
            /*Ctrl_UIGamePlay.UpdateUI end.*/

            /*Ctrl_UIGamePlay.HideResultPanel start.*/
            HideResultPanel: function () {
if ( TRACE ) { TRACE( "Ctrl_UIGamePlay#HideResultPanel", this ); }

                this._goResultPanel.SetActive(false);
            },
            /*Ctrl_UIGamePlay.HideResultPanel end.*/

            /*Ctrl_UIGamePlay.ShowResultPanel start.*/
            ShowResultPanel: function (resultType) {
if ( TRACE ) { TRACE( "Ctrl_UIGamePlay#ShowResultPanel", this ); }

                this._txtResultPanelScore.text = System.String.format(Ctrl_UIGamePlay.STRFMT_SCORES, [Bridge.box(GameManager.Instance.PlayerData.Scores, System.Int32)]);
                var resultString = "";
                switch (resultType) {
                    case E_ResultType.PlayerWin: 
                        resultString = Ctrl_UIGamePlay.STR_PLAYER_WIN;
                        this._btnToMainMenu.gameObject.SetActive(true);
                        this._btnToNextLevel.gameObject.SetActive(false);
                        break;
                    case E_ResultType.LevelCompleted: 
                        resultString = Ctrl_UIGamePlay.STR_LEVEL_COMPLETED;
                        this._btnToMainMenu.gameObject.SetActive(false);
                        this._btnToNextLevel.gameObject.SetActive(true);
                        break;
                    case E_ResultType.GameOver: 
                        this._btnToMainMenu.gameObject.SetActive(true);
                        this._btnToNextLevel.gameObject.SetActive(false);
                        resultString = Ctrl_UIGamePlay.STR_PLAYER_LOSE;
                        break;
                    default: 
                        break;
                }
                this._txtResult.text = resultString;
                this._goResultPanel.SetActive(true);
            },
            /*Ctrl_UIGamePlay.ShowResultPanel end.*/


        }
    });
    /*Ctrl_UIGamePlay end.*/

    /*Ctrl_UIMainMenu start.*/
    Bridge.define("Ctrl_UIMainMenu", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                STRFMT_HIGHSCORE: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Ctrl_UIMainMenu#init", this ); }

                    this.STRFMT_HIGHSCORE = "High Score : {0}";
                }
            }
        },
        fields: {
            _btnPlay: null,
            _btnQuit: null,
            _txtHighScore: null
        },
        methods: {
            /*Ctrl_UIMainMenu.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Ctrl_UIMainMenu#Awake", this ); }

                this._btnPlay.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickBtnPlay));
                this._btnQuit.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickBtnQuit));
            },
            /*Ctrl_UIMainMenu.Awake end.*/

            /*Ctrl_UIMainMenu.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Ctrl_UIMainMenu#Start", this ); }

                // yield return new WaitForSeconds(1f); // Give the loader a moment
                // Luna.Unity.LifeCycle.GameStarted();
                this.Reset();
            },
            /*Ctrl_UIMainMenu.Start end.*/

            /*Ctrl_UIMainMenu.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Ctrl_UIMainMenu#Update", this ); }

                // If the screen is black, click it. This will force the game to start.
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    Luna.Unity.LifeCycle.GameStarted();
                    UnityEngine.Debug.Log$1("Starting");
                }
            },
            /*Ctrl_UIMainMenu.Update end.*/

            /*Ctrl_UIMainMenu.OnClickBtnPlay start.*/
            OnClickBtnPlay: function () {
if ( TRACE ) { TRACE( "Ctrl_UIMainMenu#OnClickBtnPlay", this ); }

                GameManager.Instance.Play();
            },
            /*Ctrl_UIMainMenu.OnClickBtnPlay end.*/

            /*Ctrl_UIMainMenu.OnClickBtnQuit start.*/
            OnClickBtnQuit: function () {
if ( TRACE ) { TRACE( "Ctrl_UIMainMenu#OnClickBtnQuit", this ); }

                UnityEngine.Application.Quit();
            },
            /*Ctrl_UIMainMenu.OnClickBtnQuit end.*/

            /*Ctrl_UIMainMenu.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "Ctrl_UIMainMenu#Reset", this ); }

                this._txtHighScore.text = System.String.format(Ctrl_UIMainMenu.STRFMT_HIGHSCORE, [Bridge.box(GameManager.Instance.GetHighScore(), System.Int32)]);
            },
            /*Ctrl_UIMainMenu.Reset end.*/


        }
    });
    /*Ctrl_UIMainMenu end.*/

    /*E_BrickType start.*/
    Bridge.define("E_BrickType", {
        $kind: 6,
        statics: {
            fields: {
                ToughBrick: 1,
                PassThroughBrick: 3,
                NormalBrick: 4,
                PowerUpBrick: 5
            }
        }
    });
    /*E_BrickType end.*/

    /*E_PowerUpType start.*/
    Bridge.define("E_PowerUpType", {
        $kind: 6,
        statics: {
            fields: {
                ExtraLive: 1,
                ExtraBall: 2,
                BallsImmunity: 3
            }
        }
    });
    /*E_PowerUpType end.*/

    /*E_ResultType start.*/
    Bridge.define("E_ResultType", {
        $kind: 6,
        statics: {
            fields: {
                PlayerWin: 1,
                LevelCompleted: 2,
                GameOver: 3
            }
        }
    });
    /*E_ResultType end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                STR_MAINMENUSCENE: null,
                STR_GAMEPLAYSCENE: null,
                STR_PREFHIGHSCROE: null,
                PATH_LEVEL_SO: null,
                INT_DEFAULTLIVES: 0,
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "GameManager#Instance#get", this ); }

                        return GameManager._instance;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                    this.STR_MAINMENUSCENE = "Scn_MainMenu";
                    this.STR_GAMEPLAYSCENE = "Scn_GamePlay";
                    this.STR_PREFHIGHSCROE = "High_Score";
                    this.PATH_LEVEL_SO = "ScriptableObjects/Levels";
                    this.INT_DEFAULTLIVES = 3;
                }
            }
        },
        fields: {
            _playerData: null,
            _gamePlayControl: null,
            _mainMenuUIControl: null,
            _levels: null,
            _currentLevelIndex: 0
        },
        props: {
            PlayerData: {
                get: function () {
if ( TRACE ) { TRACE( "GameManager#PlayerData#get", this ); }

                    var $t;
                    if (this._playerData == null) {
                        this._playerData = ($t = new PlayerData(), $t.Lives = GameManager.INT_DEFAULTLIVES, $t.Scores = 0, $t.Level = 1, $t);
                    }
                    return this._playerData;
                }
            }
        },
        methods: {
            /*GameManager.SpawnRandomPowerUp start.*/
            SpawnRandomPowerUp: function (position) {
if ( TRACE ) { TRACE( "GameManager#SpawnRandomPowerUp", this ); }

                this._gamePlayControl.SpawnRandomPowerUp(position);
            },
            /*GameManager.SpawnRandomPowerUp end.*/

            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager._instance, null) && UnityEngine.MonoBehaviour.op_Inequality(GameManager._instance, this)) {
                    UnityEngine.Object.Destroy(this);
                    return;
                }
                GameManager._instance = this;
                UnityEngine.SceneManagement.SceneManager.addsceneLoaded(Bridge.fn.cacheBind(this, this.SceneManager_sceneLoaded));
                this._levels = UnityEngine.Resources.LoadAll(So_LevelData, GameManager.PATH_LEVEL_SO);
            },
            /*GameManager.Awake end.*/

            /*GameManager.GoToNextLevel start.*/
            GoToNextLevel: function () {
if ( TRACE ) { TRACE( "GameManager#GoToNextLevel", this ); }

                this._gamePlayControl.StartLevel(this._levels[this._currentLevelIndex]);
            },
            /*GameManager.GoToNextLevel end.*/

            /*GameManager.Play start.*/
            Play: function () {
if ( TRACE ) { TRACE( "GameManager#Play", this ); }

                var $t;
                UnityEngine.SceneManagement.SceneManager.LoadScene$3(GameManager.STR_GAMEPLAYSCENE, UnityEngine.SceneManagement.LoadSceneMode.Single);
                this._playerData = ($t = new PlayerData(), $t.Lives = GameManager.INT_DEFAULTLIVES, $t.Scores = 0, $t.Level = 1, $t);
            },
            /*GameManager.Play end.*/

            /*GameManager.SceneManager_sceneLoaded start.*/
            SceneManager_sceneLoaded: function (scene, mode) {
if ( TRACE ) { TRACE( "GameManager#SceneManager_sceneLoaded", this ); }

                if (Bridge.referenceEquals(scene.name, GameManager.STR_GAMEPLAYSCENE)) {
                    this._gamePlayControl = UnityEngine.Object.FindObjectOfType(Ctrl_GamePlay);
                    this._gamePlayControl.StartLevel(this._levels[0]);
                    this._currentLevelIndex = 0;
                    return;
                }

                if (Bridge.referenceEquals(scene.name, GameManager.STR_MAINMENUSCENE)) {
                    this._mainMenuUIControl = UnityEngine.Object.FindObjectOfType(Ctrl_UIMainMenu);
                    this._mainMenuUIControl.Reset();
                    return;
                }
            },
            /*GameManager.SceneManager_sceneLoaded end.*/

            /*GameManager.GoToMainMenu start.*/
            GoToMainMenu: function () {
if ( TRACE ) { TRACE( "GameManager#GoToMainMenu", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$3(GameManager.STR_MAINMENUSCENE, UnityEngine.SceneManagement.LoadSceneMode.Single);
            },
            /*GameManager.GoToMainMenu end.*/

            /*GameManager.LiveLost start.*/
            LiveLost: function () {
if ( TRACE ) { TRACE( "GameManager#LiveLost", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Equality(this._gamePlayControl, null)) {
                    return;
                }
                ($t = this._playerData).Lives = ($t.Lives - 1) | 0;

                if (this._playerData.Lives <= 0) {
                    this._gamePlayControl.GameOver();
                    var currentHighScore = this.GetHighScore();
                    if (this._playerData.Scores > currentHighScore) {
                        UnityEngine.PlayerPrefs.SetInt(GameManager.STR_PREFHIGHSCROE, this._playerData.Scores);
                    }
                } else {
                    this._gamePlayControl.DelayedSpawnBall();
                }
            },
            /*GameManager.LiveLost end.*/

            /*GameManager.BrickDestoryed start.*/
            BrickDestoryed: function (destroyedBrick) {
if ( TRACE ) { TRACE( "GameManager#BrickDestoryed", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Equality(this._gamePlayControl, null)) {
                    return;
                }
                ($t = this._playerData).Scores = ($t.Scores + destroyedBrick.Scores) | 0;
                this._gamePlayControl.BrickDestroyed(destroyedBrick);
            },
            /*GameManager.BrickDestoryed end.*/

            /*GameManager.LevelCompleted start.*/
            LevelCompleted: function () {
if ( TRACE ) { TRACE( "GameManager#LevelCompleted", this ); }

                var $t;
                var result = E_ResultType.LevelCompleted;

                var currentHighScore = this.GetHighScore();
                if (this._playerData.Scores > currentHighScore) {
                    UnityEngine.PlayerPrefs.SetInt(GameManager.STR_PREFHIGHSCROE, this._playerData.Scores);
                }

                this._currentLevelIndex = (this._currentLevelIndex + 1) | 0;
                ($t = this._playerData).Level = ($t.Level + 1) | 0;
                if (this._currentLevelIndex >= this._levels.length) {
                    result = E_ResultType.PlayerWin;
                }
                return result;
            },
            /*GameManager.LevelCompleted end.*/

            /*GameManager.GetHighScore start.*/
            GetHighScore: function () {
if ( TRACE ) { TRACE( "GameManager#GetHighScore", this ); }

                return UnityEngine.PlayerPrefs.GetInt(GameManager.STR_PREFHIGHSCROE, 0);
            },
            /*GameManager.GetHighScore end.*/

            /*GameManager.GetExtraLife start.*/
            GetExtraLife: function () {
if ( TRACE ) { TRACE( "GameManager#GetExtraLife", this ); }

                var $t;
                ($t = this._playerData).Lives = ($t.Lives + 1) | 0;
            },
            /*GameManager.GetExtraLife end.*/


        }
    });
    /*GameManager end.*/

    /*Hlpr_ResizeSpriteFullScreen start.*/
    Bridge.define("Hlpr_ResizeSpriteFullScreen", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _yRatio: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Hlpr_ResizeSpriteFullScreen#init", this ); }

                    this._yRatio = 0.8;
                }
            }
        },
        methods: {
            /*Hlpr_ResizeSpriteFullScreen.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Hlpr_ResizeSpriteFullScreen#Start", this ); }

                this.Resize();
            },
            /*Hlpr_ResizeSpriteFullScreen.Start end.*/

            /*Hlpr_ResizeSpriteFullScreen.Resize start.*/
            Resize: function () {
if ( TRACE ) { TRACE( "Hlpr_ResizeSpriteFullScreen#Resize", this ); }

                var sr = this.GetComponent(UnityEngine.SpriteRenderer);
                if (UnityEngine.Component.op_Equality(sr, null) || sr.sprite == null) {
                    return;
                }
                this.transform.localScale = new pc.Vec3( 1, 1, 1 );

                var width = sr.sprite.bounds.halfExtents.$clone().scale( 2 ).x;
                var height = sr.sprite.bounds.halfExtents.$clone().scale( 2 ).y;

                var cameraOrthoFullSize = UnityEngine.Camera.main.orthographicSize * 2.0;
                var worldScreenHeight = cameraOrthoFullSize;
                var worldScreenWidth = cameraOrthoFullSize * UnityEngine.Camera.main.aspect;

                var xWidth = this.transform.localScale.$clone();
                xWidth.x = worldScreenWidth / width;
                this.transform.localScale = xWidth.$clone();

                var yHeight = this.transform.localScale.$clone();
                yHeight.y = worldScreenHeight / height * Hlpr_ResizeSpriteFullScreen._yRatio;
                this.transform.localScale = yHeight.$clone();
                ;
            },
            /*Hlpr_ResizeSpriteFullScreen.Resize end.*/


        }
    });
    /*Hlpr_ResizeSpriteFullScreen end.*/

    /*Hlpr_ScreenSize start.*/
    Bridge.define("Hlpr_ScreenSize", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            props: {
                GetScreenToWorldHeight: {
                    get: function () {
if ( TRACE ) { TRACE( "Hlpr_ScreenSize#GetScreenToWorldHeight#get", this ); }

                        var topRightCorner = new pc.Vec2( 1, 1 );
                        var edgeVector = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ViewportToWorldPoint(UnityEngine.Vector3.FromVector2(topRightCorner.$clone())));
                        var height = edgeVector.y * 2;
                        return height;
                    }
                },
                GetScreenToWorldWidth: {
                    get: function () {
if ( TRACE ) { TRACE( "Hlpr_ScreenSize#GetScreenToWorldWidth#get", this ); }

                        var topRightCorner = new pc.Vec2( 1, 1 );
                        var edgeVector = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ViewportToWorldPoint(UnityEngine.Vector3.FromVector2(topRightCorner.$clone())));
                        var width = edgeVector.x * 2;
                        return width;
                    }
                }
            }
        }
    });
    /*Hlpr_ScreenSize end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LevelEditor start.*/
    Bridge.define("LevelEditor", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Rows: 0,
            Columns: 0,
            Spacing: 0,
            _brickPrefab: null,
            _soLevelData: null,
            _brickType: 0,
            _bricks: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LevelEditor#init", this ); }

                this.Spacing = 0.1;
                this._bricks = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*LevelEditor.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LevelEditor#Start", this ); }

                this.ResetLevel();
                for (var i = 0; i < this._soLevelData.BrickColorList.Count; i = (i + 1) | 0) {
                    if (this._soLevelData.BrickColorList.getItem(i) === E_BrickType.PassThroughBrick) {
                        this._soLevelData.BrickColorList.setItem(i, E_BrickType.PowerUpBrick);
                    }
                }
            },
            /*LevelEditor.Start end.*/

            /*LevelEditor.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LevelEditor#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var ray = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition);
                    var hit = UnityEngine.Physics2D.GetRayIntersection(ray, window.Infinity);

                    if (UnityEngine.Component.op_Inequality(hit.collider, null)) {
                        var ctrl_Brick = hit.transform.GetComponent(Ctrl_Brick);
                        hit.transform.GetComponent(UnityEngine.SpriteRenderer).color = BrickColorExtension.GenerateBrickColor(this._brickType);
                        this._soLevelData.x.add(hit.transform.localPosition.x);
                        this._soLevelData.y.add(hit.transform.localPosition.y);
                        this._soLevelData.BrickColorList.add(this._brickType);
                    }
                }
            },
            /*LevelEditor.Update end.*/

            /*LevelEditor.ResetLevel start.*/
            ResetLevel: function () {
if ( TRACE ) { TRACE( "LevelEditor#ResetLevel", this ); }

                for (var i = 0; i < this._bricks.Count; i = (i + 1) | 0) {
                    UnityEngine.MonoBehaviour.Destroy(this._bricks.getItem(i));
                }
                this._bricks.clear();
                var StartX = -(this.Rows / 2.0) * this.Spacing;
                var StartY = (this.Columns / 2.0) * this.Spacing + this.Spacing / 2.0;
                for (var x = 1; x <= this.Rows; x = (x + 1) | 0) {
                    for (var y = 1; y <= this.Columns; y = (y + 1) | 0) {
                        var pos = new pc.Vec2( -StartY + y * this.Spacing, -StartX + ((-x) | 0) * this.Spacing );
                        var go = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this._brickPrefab, UnityEngine.Vector3.FromVector2(pos), pc.Quat.IDENTITY.clone());
                        go.transform.SetParent(this.gameObject.transform, false);
                        this._bricks.add(go);
                    }
                }

                if (UnityEngine.Camera.main.aspect <= 0.5) {
                    this.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( UnityEngine.Camera.main.aspect ).clone().scale( 0.75 ).clone().scale( 2.0 );
                } else {
                    this.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 0.75 );
                }

            },
            /*LevelEditor.ResetLevel end.*/


        }
    });
    /*LevelEditor end.*/

    /*PlayerData start.*/
    Bridge.define("PlayerData", {
        fields: {
            Lives: 0,
            Scores: 0,
            Level: 0
        }
    });
    /*PlayerData end.*/

    /*So_LevelData start.*/
    Bridge.define("So_LevelData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            x: null,
            y: null,
            BrickColorList: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "So_LevelData#init", this ); }

                this.x = new (System.Collections.Generic.List$1(System.Single)).ctor();
                this.y = new (System.Collections.Generic.List$1(System.Single)).ctor();
                this.BrickColorList = new (System.Collections.Generic.List$1(E_BrickType)).ctor();
            }
        }
    });
    /*So_LevelData end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","System.Collections","System.Collections.Generic","UnityEngine.UI","TMPro","UnityEngine.SceneManagement"];

    /*Ctrl_Ball start.*/
    $m("Ctrl_Ball", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[0].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[1].Void,"p":[$n[0].Collider2D]},{"a":2,"n":"Spawn","t":8,"sn":"Spawn","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballDamage","t":4,"rt":$n[1].Int32,"sn":"_ballDamage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballMaterial","t":4,"rt":$n[0].PhysicsMaterial2D,"sn":"_ballMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballSpeed","t":4,"rt":$n[1].Single,"sn":"_ballSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballStartingPosition","t":4,"rt":$n[0].Vector2,"sn":"_ballStartingPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_directionDeflectionThreshold","t":4,"rt":$n[1].Single,"sn":"_directionDeflectionThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxXDeflectionRange","t":4,"rt":$n[1].Single,"sn":"_maxXDeflectionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxXRange","t":4,"rt":$n[1].Single,"sn":"_maxXRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxYDeflectionRange","t":4,"rt":$n[1].Single,"sn":"_maxYDeflectionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxYRange","t":4,"rt":$n[1].Single,"sn":"_maxYRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_minXDeflectionRange","t":4,"rt":$n[1].Single,"sn":"_minXDeflectionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_minXRange","t":4,"rt":$n[1].Single,"sn":"_minXRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_minYDeflectionRange","t":4,"rt":$n[1].Single,"sn":"_minYDeflectionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_minYRange","t":4,"rt":$n[1].Single,"sn":"_minYRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rb","t":4,"rt":$n[0].Rigidbody2D,"sn":"_rb"}]}; }, $n);
    /*Ctrl_Ball end.*/

    /*Ctrl_BotBorder start.*/
    $m("Ctrl_BotBorder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":4,"n":"DisableTriggerTemporary","t":8,"sn":"DisableTriggerTemporary","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[0].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[1].Void,"p":[$n[0].Collider2D]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_boxCollider","t":4,"rt":$n[0].BoxCollider2D,"sn":"_boxCollider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gamePlayControl","t":4,"rt":Ctrl_GamePlay,"sn":"_gamePlayControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_goImmunityBar","t":4,"rt":$n[0].GameObject,"sn":"_goImmunityBar"},{"a":1,"n":"_startCountdown","t":4,"rt":$n[1].Boolean,"sn":"_startCountdown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_timer","t":4,"rt":$n[1].Single,"sn":"_timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_triggerDisableTimer","t":4,"rt":$n[1].Single,"sn":"_triggerDisableTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Ctrl_BotBorder end.*/

    /*Ctrl_Brick start.*/
    $m("Ctrl_Brick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DestroyBrick","t":8,"sn":"DestroyBrick","rt":$n[1].Void},{"a":2,"n":"ReceiveDamage","t":8,"pi":[{"n":"damage","pt":$n[1].Int32,"ps":0}],"sn":"ReceiveDamage","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"Scores","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Scores","t":8,"rt":$n[1].Int32,"fg":"Scores","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Scores"},{"a":1,"n":"_currentHitPoints","t":4,"rt":$n[1].Int32,"sn":"_currentHitPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hitPoints","t":4,"rt":$n[1].Int32,"sn":"_hitPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_powerUpChance","t":4,"rt":$n[1].Single,"sn":"_powerUpChance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_scores","t":4,"rt":$n[1].Int32,"sn":"_scores","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sr","t":4,"rt":$n[0].SpriteRenderer,"sn":"_sr"}]}; }, $n);
    /*Ctrl_Brick end.*/

    /*Ctrl_GamePlay start.*/
    $m("Ctrl_GamePlay", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":4,"n":"BallLost","t":8,"pi":[{"n":"ballControl","pt":Ctrl_Ball,"ps":0}],"sn":"BallLost","rt":$n[1].Void,"p":[Ctrl_Ball]},{"a":2,"n":"BrickDestroyed","t":8,"pi":[{"n":"destroyedBrick","pt":Ctrl_Brick,"ps":0}],"sn":"BrickDestroyed","rt":$n[1].Void,"p":[Ctrl_Brick]},{"a":1,"n":"ClearLevel","t":8,"sn":"ClearLevel","rt":$n[1].Void},{"a":2,"n":"DelayedSpawnBall","t":8,"sn":"DelayedSpawnBall","rt":$n[1].Void},{"a":2,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[1].Void},{"a":2,"n":"InstantSpawnBall","t":8,"sn":"InstantSpawnBall","rt":$n[1].Void},{"a":2,"n":"PowerUpTrigger","t":8,"pi":[{"n":"powerType","pt":E_PowerUpType,"ps":0}],"sn":"PowerUpTrigger","rt":$n[1].Void,"p":[E_PowerUpType]},{"a":1,"n":"SpawnBallCoroutine","t":8,"sn":"SpawnBallCoroutine","rt":$n[2].IEnumerator},{"a":4,"n":"SpawnRandomPowerUp","t":8,"pi":[{"n":"position","pt":$n[0].Vector3,"ps":0}],"sn":"SpawnRandomPowerUp","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":2,"n":"StartLevel","t":8,"pi":[{"n":"level","pt":So_LevelData,"ps":0}],"sn":"StartLevel","rt":$n[1].Void,"p":[So_LevelData]},{"a":2,"n":"TfRightX","t":4,"rt":$n[0].Transform,"sn":"TfRightX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballControl","t":4,"rt":Ctrl_Ball,"sn":"_ballControl"},{"a":1,"n":"_balls","t":4,"rt":$n[3].List$1(Ctrl_Ball),"sn":"_balls"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballsImmunityChance","t":4,"rt":$n[1].Int32,"sn":"_ballsImmunityChance","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballsParent","t":4,"rt":$n[0].GameObject,"sn":"_ballsParent"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_botBorderControl","t":4,"rt":Ctrl_BotBorder,"sn":"_botBorderControl"},{"a":1,"n":"_bricks","t":4,"rt":$n[3].List$1(Ctrl_Brick),"sn":"_bricks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bricksParent","t":4,"rt":$n[0].GameObject,"sn":"_bricksParent"},{"a":1,"n":"_currentLevel","t":4,"rt":So_LevelData,"sn":"_currentLevel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_extraBallChance","t":4,"rt":$n[1].Int32,"sn":"_extraBallChance","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_extraBallMultiplier","t":4,"rt":$n[1].Int32,"sn":"_extraBallMultiplier","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_levelLayoutControl","t":4,"rt":Ctrl_LevelLayout,"sn":"_levelLayoutControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_paddleControl","t":4,"rt":Ctrl_Paddle,"sn":"_paddleControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_powerUpBallImmunityControl","t":4,"rt":Ctrl_PowerUp,"sn":"_powerUpBallImmunityControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_powerUpExtraBallControl","t":4,"rt":Ctrl_PowerUp,"sn":"_powerUpExtraBallControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_powerUpExtraLiveControl","t":4,"rt":Ctrl_PowerUp,"sn":"_powerUpExtraLiveControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tfPowerUpParent","t":4,"rt":$n[0].Transform,"sn":"_tfPowerUpParent"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_uiControl","t":4,"rt":Ctrl_UIGamePlay,"sn":"_uiControl"}]}; }, $n);
    /*Ctrl_GamePlay end.*/

    /*Ctrl_LevelLayout start.*/
    $m("Ctrl_LevelLayout", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GenerateBricks","t":8,"sn":"GenerateBricks","rt":$n[3].List$1(Ctrl_Brick)},{"a":2,"n":"Level","t":4,"rt":So_LevelData,"sn":"Level"},{"a":1,"n":"_bricks","t":4,"rt":$n[3].List$1(Ctrl_Brick),"sn":"_bricks"}]}; }, $n);
    /*Ctrl_LevelLayout end.*/

    /*BrickColorExtension start.*/
    $m("BrickColorExtension", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"Brick","is":true,"t":8,"pi":[{"n":"name","pt":$n[1].String,"ps":0}],"sn":"Brick","rt":$n[0].GameObject,"p":[$n[1].String]},{"a":2,"n":"GenerateBrickColor","is":true,"t":8,"pi":[{"n":"brickColor","pt":E_BrickType,"ps":0}],"sn":"GenerateBrickColor","rt":$n[0].Color,"p":[E_BrickType]},{"a":2,"n":"GenerateBrickType","is":true,"t":8,"pi":[{"n":"brickType","pt":E_BrickType,"ps":0}],"sn":"GenerateBrickType","rt":$n[0].GameObject,"p":[E_BrickType]}]}; }, $n);
    /*BrickColorExtension end.*/

    /*Ctrl_Paddle start.*/
    $m("Ctrl_Paddle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"FLT_PADDLE_HEIGHT","is":true,"t":4,"rt":$n[1].Single,"sn":"FLT_PADDLE_HEIGHT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gamePlayControl","t":4,"rt":Ctrl_GamePlay,"sn":"_gamePlayControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_paddleMaterial","t":4,"rt":$n[0].PhysicsMaterial2D,"sn":"_paddleMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_paddleStartingPosition","t":4,"rt":$n[0].Vector2,"sn":"_paddleStartingPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_paddleWidthRatioToScreen","t":4,"rt":$n[1].Single,"sn":"_paddleWidthRatioToScreen","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_rb","t":4,"rt":$n[0].Rigidbody2D,"sn":"_rb"},{"a":1,"n":"_sr","t":4,"rt":$n[0].SpriteRenderer,"sn":"_sr"}]}; }, $n);
    /*Ctrl_Paddle end.*/

    /*Ctrl_PowerUp start.*/
    $m("Ctrl_PowerUp", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"pi":[{"n":"gamePlay","pt":Ctrl_GamePlay,"ps":0}],"sn":"Init","rt":$n[1].Void,"p":[Ctrl_GamePlay]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[0].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[1].Void,"p":[$n[0].Collider2D]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gameControl","t":4,"rt":Ctrl_GamePlay,"sn":"_gameControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_powerUpType","t":4,"rt":E_PowerUpType,"sn":"_powerUpType","box":function ($v) { return Bridge.box($v, E_PowerUpType, System.Enum.toStringFn(E_PowerUpType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sr","t":4,"rt":$n[0].SpriteRenderer,"sn":"_sr"}]}; }, $n);
    /*Ctrl_PowerUp end.*/

    /*Ctrl_UIGamePlay start.*/
    $m("Ctrl_UIGamePlay", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"HideResultPanel","t":8,"sn":"HideResultPanel","rt":$n[1].Void},{"a":1,"n":"OnClickToMainMenu","t":8,"sn":"OnClickToMainMenu","rt":$n[1].Void},{"a":1,"n":"OnClickToNextLevel","t":8,"sn":"OnClickToNextLevel","rt":$n[1].Void},{"a":2,"n":"ShowResultPanel","t":8,"pi":[{"n":"resultType","pt":E_ResultType,"ps":0}],"sn":"ShowResultPanel","rt":$n[1].Void,"p":[E_ResultType]},{"a":2,"n":"UpdateUI","t":8,"sn":"UpdateUI","rt":$n[1].Void},{"a":1,"n":"STRFMT_LEVEL","is":true,"t":4,"rt":$n[1].String,"sn":"STRFMT_LEVEL"},{"a":1,"n":"STRFMT_LIVES","is":true,"t":4,"rt":$n[1].String,"sn":"STRFMT_LIVES"},{"a":1,"n":"STRFMT_SCORES","is":true,"t":4,"rt":$n[1].String,"sn":"STRFMT_SCORES"},{"a":1,"n":"STR_LEVEL_COMPLETED","is":true,"t":4,"rt":$n[1].String,"sn":"STR_LEVEL_COMPLETED"},{"a":1,"n":"STR_PLAYER_LOSE","is":true,"t":4,"rt":$n[1].String,"sn":"STR_PLAYER_LOSE"},{"a":1,"n":"STR_PLAYER_WIN","is":true,"t":4,"rt":$n[1].String,"sn":"STR_PLAYER_WIN"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_btnBack","t":4,"rt":$n[4].Button,"sn":"_btnBack"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_btnToMainMenu","t":4,"rt":$n[4].Button,"sn":"_btnToMainMenu"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_btnToNextLevel","t":4,"rt":$n[4].Button,"sn":"_btnToNextLevel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_goResultPanel","t":4,"rt":$n[0].GameObject,"sn":"_goResultPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_txtLevel","t":4,"rt":$n[4].Text,"sn":"_txtLevel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_txtLives","t":4,"rt":$n[4].Text,"sn":"_txtLives"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_txtResult","t":4,"rt":$n[5].TMP_Text,"sn":"_txtResult"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_txtResultPanelScore","t":4,"rt":$n[4].Text,"sn":"_txtResultPanelScore"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_txtScores","t":4,"rt":$n[4].Text,"sn":"_txtScores"}]}; }, $n);
    /*Ctrl_UIGamePlay end.*/

    /*Ctrl_UIMainMenu start.*/
    $m("Ctrl_UIMainMenu", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"OnClickBtnPlay","t":8,"sn":"OnClickBtnPlay","rt":$n[1].Void},{"a":1,"n":"OnClickBtnQuit","t":8,"sn":"OnClickBtnQuit","rt":$n[1].Void},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"STRFMT_HIGHSCORE","is":true,"t":4,"rt":$n[1].String,"sn":"STRFMT_HIGHSCORE"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_btnPlay","t":4,"rt":$n[4].Button,"sn":"_btnPlay"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_btnQuit","t":4,"rt":$n[4].Button,"sn":"_btnQuit"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_txtHighScore","t":4,"rt":$n[4].Text,"sn":"_txtHighScore"}]}; }, $n);
    /*Ctrl_UIMainMenu end.*/

    /*E_BrickType start.*/
    $m("E_BrickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"NormalBrick","is":true,"t":4,"rt":E_BrickType,"sn":"NormalBrick","box":function ($v) { return Bridge.box($v, E_BrickType, System.Enum.toStringFn(E_BrickType));}},{"a":2,"n":"PassThroughBrick","is":true,"t":4,"rt":E_BrickType,"sn":"PassThroughBrick","box":function ($v) { return Bridge.box($v, E_BrickType, System.Enum.toStringFn(E_BrickType));}},{"a":2,"n":"PowerUpBrick","is":true,"t":4,"rt":E_BrickType,"sn":"PowerUpBrick","box":function ($v) { return Bridge.box($v, E_BrickType, System.Enum.toStringFn(E_BrickType));}},{"a":2,"n":"ToughBrick","is":true,"t":4,"rt":E_BrickType,"sn":"ToughBrick","box":function ($v) { return Bridge.box($v, E_BrickType, System.Enum.toStringFn(E_BrickType));}}]}; }, $n);
    /*E_BrickType end.*/

    /*E_ResultType start.*/
    $m("E_ResultType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameOver","is":true,"t":4,"rt":E_ResultType,"sn":"GameOver","box":function ($v) { return Bridge.box($v, E_ResultType, System.Enum.toStringFn(E_ResultType));}},{"a":2,"n":"LevelCompleted","is":true,"t":4,"rt":E_ResultType,"sn":"LevelCompleted","box":function ($v) { return Bridge.box($v, E_ResultType, System.Enum.toStringFn(E_ResultType));}},{"a":2,"n":"PlayerWin","is":true,"t":4,"rt":E_ResultType,"sn":"PlayerWin","box":function ($v) { return Bridge.box($v, E_ResultType, System.Enum.toStringFn(E_ResultType));}}]}; }, $n);
    /*E_ResultType end.*/

    /*E_PowerUpType start.*/
    $m("E_PowerUpType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BallsImmunity","is":true,"t":4,"rt":E_PowerUpType,"sn":"BallsImmunity","box":function ($v) { return Bridge.box($v, E_PowerUpType, System.Enum.toStringFn(E_PowerUpType));}},{"a":2,"n":"ExtraBall","is":true,"t":4,"rt":E_PowerUpType,"sn":"ExtraBall","box":function ($v) { return Bridge.box($v, E_PowerUpType, System.Enum.toStringFn(E_PowerUpType));}},{"a":2,"n":"ExtraLive","is":true,"t":4,"rt":E_PowerUpType,"sn":"ExtraLive","box":function ($v) { return Bridge.box($v, E_PowerUpType, System.Enum.toStringFn(E_PowerUpType));}}]}; }, $n);
    /*E_PowerUpType end.*/

    /*Hlpr_ResizeSpriteFullScreen start.*/
    $m("Hlpr_ResizeSpriteFullScreen", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Resize","t":8,"sn":"Resize","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"_yRatio","is":true,"t":4,"rt":$n[1].Single,"sn":"_yRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Hlpr_ResizeSpriteFullScreen end.*/

    /*Hlpr_ScreenSize start.*/
    $m("Hlpr_ScreenSize", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetScreenToWorldHeight","is":true,"t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_GetScreenToWorldHeight","t":8,"rt":$n[1].Single,"fg":"GetScreenToWorldHeight","is":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"GetScreenToWorldHeight"},{"a":2,"n":"GetScreenToWorldWidth","is":true,"t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_GetScreenToWorldWidth","t":8,"rt":$n[1].Single,"fg":"GetScreenToWorldWidth","is":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"GetScreenToWorldWidth"}]}; }, $n);
    /*Hlpr_ScreenSize end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"BrickDestoryed","t":8,"pi":[{"n":"destroyedBrick","pt":Ctrl_Brick,"ps":0}],"sn":"BrickDestoryed","rt":$n[1].Void,"p":[Ctrl_Brick]},{"a":2,"n":"GetExtraLife","t":8,"sn":"GetExtraLife","rt":$n[1].Void},{"a":2,"n":"GetHighScore","t":8,"sn":"GetHighScore","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GoToMainMenu","t":8,"sn":"GoToMainMenu","rt":$n[1].Void},{"a":4,"n":"GoToNextLevel","t":8,"sn":"GoToNextLevel","rt":$n[1].Void},{"a":2,"n":"LevelCompleted","t":8,"sn":"LevelCompleted","rt":E_ResultType,"box":function ($v) { return Bridge.box($v, E_ResultType, System.Enum.toStringFn(E_ResultType));}},{"a":2,"n":"LiveLost","t":8,"sn":"LiveLost","rt":$n[1].Void},{"a":2,"n":"Play","t":8,"sn":"Play","rt":$n[1].Void},{"a":1,"n":"SceneManager_sceneLoaded","t":8,"pi":[{"n":"scene","pt":LunaUnity.Objects.Scene,"ps":0},{"n":"mode","pt":$n[6].LoadSceneMode,"ps":1}],"sn":"SceneManager_sceneLoaded","rt":$n[1].Void,"p":[LunaUnity.Objects.Scene,$n[6].LoadSceneMode]},{"a":4,"n":"SpawnRandomPowerUp","t":8,"pi":[{"n":"position","pt":$n[0].Vector3,"ps":0}],"sn":"SpawnRandomPowerUp","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"PlayerData","t":16,"rt":PlayerData,"g":{"a":2,"n":"get_PlayerData","t":8,"rt":PlayerData,"fg":"PlayerData"},"fn":"PlayerData"},{"a":1,"n":"INT_DEFAULTLIVES","is":true,"t":4,"rt":$n[1].Int32,"sn":"INT_DEFAULTLIVES","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"PATH_LEVEL_SO","is":true,"t":4,"rt":$n[1].String,"sn":"PATH_LEVEL_SO"},{"a":1,"n":"STR_GAMEPLAYSCENE","is":true,"t":4,"rt":$n[1].String,"sn":"STR_GAMEPLAYSCENE"},{"a":1,"n":"STR_MAINMENUSCENE","is":true,"t":4,"rt":$n[1].String,"sn":"STR_MAINMENUSCENE"},{"a":1,"n":"STR_PREFHIGHSCROE","is":true,"t":4,"rt":$n[1].String,"sn":"STR_PREFHIGHSCROE"},{"a":1,"n":"_currentLevelIndex","t":4,"rt":$n[1].Int32,"sn":"_currentLevelIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_gamePlayControl","t":4,"rt":Ctrl_GamePlay,"sn":"_gamePlayControl"},{"a":1,"n":"_instance","is":true,"t":4,"rt":GameManager,"sn":"_instance"},{"a":1,"n":"_levels","t":4,"rt":System.Array.type(So_LevelData),"sn":"_levels"},{"a":1,"n":"_mainMenuUIControl","t":4,"rt":Ctrl_UIMainMenu,"sn":"_mainMenuUIControl"},{"a":1,"n":"_playerData","t":4,"rt":PlayerData,"sn":"_playerData"}]}; }, $n);
    /*GameManager end.*/

    /*PlayerData start.*/
    $m("PlayerData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Level","t":4,"rt":$n[1].Int32,"sn":"Level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Lives","t":4,"rt":$n[1].Int32,"sn":"Lives","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Scores","t":4,"rt":$n[1].Int32,"sn":"Scores","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PlayerData end.*/

    /*LevelEditor start.*/
    $m("LevelEditor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ResetLevel","t":8,"sn":"ResetLevel","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Columns","t":4,"rt":$n[1].Int32,"sn":"Columns","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Rows","t":4,"rt":$n[1].Int32,"sn":"Rows","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Spacing","t":4,"rt":$n[1].Single,"sn":"Spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_brickPrefab","t":4,"rt":$n[0].GameObject,"sn":"_brickPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_brickType","t":4,"rt":E_BrickType,"sn":"_brickType","box":function ($v) { return Bridge.box($v, E_BrickType, System.Enum.toStringFn(E_BrickType));}},{"a":1,"n":"_bricks","t":4,"rt":$n[3].List$1(UnityEngine.GameObject),"sn":"_bricks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_soLevelData","t":4,"rt":So_LevelData,"sn":"_soLevelData"}]}; }, $n);
    /*LevelEditor end.*/

    /*So_LevelData start.*/
    $m("So_LevelData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "Data", menuName: "ScriptableObjects/LevelData", order: 1
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BrickColorList","t":4,"rt":$n[3].List$1(E_BrickType),"sn":"BrickColorList"},{"a":2,"n":"x","t":4,"rt":$n[3].List$1(System.Single),"sn":"x"},{"a":2,"n":"y","t":4,"rt":$n[3].List$1(System.Single),"sn":"y"}]}; }, $n);
    /*So_LevelData end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
