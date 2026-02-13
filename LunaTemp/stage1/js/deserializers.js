var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointSpring' )
  var i433 = data
  i432.spring = i433[0]
  i432.damper = i433[1]
  i432.targetPosition = i433[2]
  return i432
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointMotor' )
  var i435 = data
  i434.m_TargetVelocity = i435[0]
  i434.m_Force = i435[1]
  i434.m_FreeSpin = i435[2]
  return i434
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointLimits' )
  var i437 = data
  i436.m_Min = i437[0]
  i436.m_Max = i437[1]
  i436.m_Bounciness = i437[2]
  i436.m_BounceMinVelocity = i437[3]
  i436.m_ContactDistance = i437[4]
  i436.minBounce = i437[5]
  i436.maxBounce = i437[6]
  return i436
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointDrive' )
  var i439 = data
  i438.m_PositionSpring = i439[0]
  i438.m_PositionDamper = i439[1]
  i438.m_MaximumForce = i439[2]
  return i438
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i441 = data
  i440.m_Spring = i441[0]
  i440.m_Damper = i441[1]
  return i440
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i443 = data
  i442.m_Limit = i443[0]
  i442.m_Bounciness = i443[1]
  i442.m_ContactDistance = i443[2]
  return i442
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i445 = data
  i444.m_ExtremumSlip = i445[0]
  i444.m_ExtremumValue = i445[1]
  i444.m_AsymptoteSlip = i445[2]
  i444.m_AsymptoteValue = i445[3]
  i444.m_Stiffness = i445[4]
  return i444
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i447 = data
  i446.m_LowerAngle = i447[0]
  i446.m_UpperAngle = i447[1]
  return i446
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i449 = data
  i448.m_MotorSpeed = i449[0]
  i448.m_MaximumMotorTorque = i449[1]
  return i448
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i451 = data
  i450.m_DampingRatio = i451[0]
  i450.m_Frequency = i451[1]
  i450.m_Angle = i451[2]
  return i450
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i453 = data
  i452.m_LowerTranslation = i453[0]
  i452.m_UpperTranslation = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i454 = root || new pc.UnityMaterial()
  var i455 = data
  i454.name = i455[0]
  request.r(i455[1], i455[2], 0, i454, 'shader')
  i454.renderQueue = i455[3]
  i454.enableInstancing = !!i455[4]
  var i457 = i455[5]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i457[i + 0]) );
  }
  i454.floatParameters = i456
  var i459 = i455[6]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i459[i + 0]) );
  }
  i454.colorParameters = i458
  var i461 = i455[7]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i461[i + 0]) );
  }
  i454.vectorParameters = i460
  var i463 = i455[8]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i463[i + 0]) );
  }
  i454.textureParameters = i462
  var i465 = i455[9]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i465[i + 0]) );
  }
  i454.materialFlags = i464
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = new pc.Color(i473[1], i473[2], i473[3], i473[4])
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i477 = data
  i476.name = i477[0]
  i476.value = new pc.Vec4( i477[1], i477[2], i477[3], i477[4] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i481 = data
  i480.name = i481[0]
  request.r(i481[1], i481[2], 0, i480, 'value')
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i485 = data
  i484.name = i485[0]
  i484.enabled = !!i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i487 = data
  i486.name = i487[0]
  i486.width = i487[1]
  i486.height = i487[2]
  i486.mipmapCount = i487[3]
  i486.anisoLevel = i487[4]
  i486.filterMode = i487[5]
  i486.hdr = !!i487[6]
  i486.format = i487[7]
  i486.wrapMode = i487[8]
  i486.alphaIsTransparency = !!i487[9]
  i486.alphaSource = i487[10]
  i486.graphicsFormat = i487[11]
  i486.sRGBTexture = !!i487[12]
  i486.desiredColorSpace = i487[13]
  i486.wrapU = i487[14]
  i486.wrapV = i487[15]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i489 = data
  i488.position = new pc.Vec3( i489[0], i489[1], i489[2] )
  i488.scale = new pc.Vec3( i489[3], i489[4], i489[5] )
  i488.rotation = new pc.Quat(i489[6], i489[7], i489[8], i489[9])
  return i488
}

Deserializers["Ctrl_Ball"] = function (request, data, root) {
  var i490 = root || request.c( 'Ctrl_Ball' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, '_ballMaterial')
  request.r(i491[2], i491[3], 0, i490, '_rb')
  i490._ballStartingPosition = new pc.Vec2( i491[4], i491[5] )
  i490._ballDamage = i491[6]
  i490._ballSpeed = i491[7]
  i490._minXRange = i491[8]
  i490._maxXRange = i491[9]
  i490._minYRange = i491[10]
  i490._maxYRange = i491[11]
  i490._directionDeflectionThreshold = i491[12]
  i490._minXDeflectionRange = i491[13]
  i490._maxXDeflectionRange = i491[14]
  i490._minYDeflectionRange = i491[15]
  i490._maxYDeflectionRange = i491[16]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i493 = data
  i492.color = new pc.Color(i493[0], i493[1], i493[2], i493[3])
  request.r(i493[4], i493[5], 0, i492, 'sprite')
  i492.flipX = !!i493[6]
  i492.flipY = !!i493[7]
  i492.drawMode = i493[8]
  i492.size = new pc.Vec2( i493[9], i493[10] )
  i492.tileMode = i493[11]
  i492.adaptiveModeThreshold = i493[12]
  i492.maskInteraction = i493[13]
  i492.spriteSortPoint = i493[14]
  i492.enabled = !!i493[15]
  request.r(i493[16], i493[17], 0, i492, 'sharedMaterial')
  var i495 = i493[18]
  var i494 = []
  for(var i = 0; i < i495.length; i += 2) {
  request.r(i495[i + 0], i495[i + 1], 2, i494, '')
  }
  i492.sharedMaterials = i494
  i492.receiveShadows = !!i493[19]
  i492.shadowCastingMode = i493[20]
  i492.sortingLayerID = i493[21]
  i492.sortingOrder = i493[22]
  i492.lightmapIndex = i493[23]
  i492.lightmapSceneIndex = i493[24]
  i492.lightmapScaleOffset = new pc.Vec4( i493[25], i493[26], i493[27], i493[28] )
  i492.lightProbeUsage = i493[29]
  i492.reflectionProbeUsage = i493[30]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i499 = data
  i498.bodyType = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'material')
  i498.simulated = !!i499[3]
  i498.useAutoMass = !!i499[4]
  i498.mass = i499[5]
  i498.drag = i499[6]
  i498.angularDrag = i499[7]
  i498.gravityScale = i499[8]
  i498.collisionDetectionMode = i499[9]
  i498.sleepMode = i499[10]
  i498.constraints = i499[11]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i501 = data
  i500.usedByComposite = !!i501[0]
  i500.autoTiling = !!i501[1]
  i500.size = new pc.Vec2( i501[2], i501[3] )
  i500.edgeRadius = i501[4]
  i500.enabled = !!i501[5]
  i500.isTrigger = !!i501[6]
  i500.usedByEffector = !!i501[7]
  i500.density = i501[8]
  i500.offset = new pc.Vec2( i501[9], i501[10] )
  request.r(i501[11], i501[12], 0, i500, 'material')
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i503 = data
  i502.name = i503[0]
  i502.tagId = i503[1]
  i502.enabled = !!i503[2]
  i502.isStatic = !!i503[3]
  i502.layer = i503[4]
  return i502
}

Deserializers["Ctrl_Paddle"] = function (request, data, root) {
  var i504 = root || request.c( 'Ctrl_Paddle' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, '_gamePlayControl')
  request.r(i505[2], i505[3], 0, i504, '_paddleMaterial')
  i504._paddleStartingPosition = new pc.Vec2( i505[4], i505[5] )
  i504._paddleWidthRatioToScreen = i505[6]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i507 = data
  i506.usedByComposite = !!i507[0]
  i506.autoTiling = !!i507[1]
  var i509 = i507[2]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
  var i511 = i509[i + 0]
  var i510 = []
  for(var i = 0; i < i511.length; i += 2) {
    i510.push( new pc.Vec2( i511[i + 0], i511[i + 1] ) );
  }
    i508.push( i510 );
  }
  i506.points = i508
  i506.enabled = !!i507[3]
  i506.isTrigger = !!i507[4]
  i506.usedByEffector = !!i507[5]
  i506.density = i507[6]
  i506.offset = new pc.Vec2( i507[7], i507[8] )
  request.r(i507[9], i507[10], 0, i506, 'material')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i519 = data
  i518.size = new pc.Vec2( i519[0], i519[1] )
  i518.direction = i519[2]
  i518.enabled = !!i519[3]
  i518.isTrigger = !!i519[4]
  i518.usedByEffector = !!i519[5]
  i518.density = i519[6]
  i518.offset = new pc.Vec2( i519[7], i519[8] )
  request.r(i519[9], i519[10], 0, i518, 'material')
  return i518
}

Deserializers["Ctrl_PowerUp"] = function (request, data, root) {
  var i520 = root || request.c( 'Ctrl_PowerUp' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, '_sr')
  i520._powerUpType = i521[2]
  request.r(i521[3], i521[4], 0, i520, '_gameControl')
  return i520
}

Deserializers["GameManager"] = function (request, data, root) {
  var i522 = root || request.c( 'GameManager' )
  var i523 = data
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i525 = data
  i524.name = i525[0]
  i524.index = i525[1]
  i524.startup = !!i525[2]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i527 = data
  i526.aspect = i527[0]
  i526.orthographic = !!i527[1]
  i526.orthographicSize = i527[2]
  i526.backgroundColor = new pc.Color(i527[3], i527[4], i527[5], i527[6])
  i526.nearClipPlane = i527[7]
  i526.farClipPlane = i527[8]
  i526.fieldOfView = i527[9]
  i526.depth = i527[10]
  i526.clearFlags = i527[11]
  i526.cullingMask = i527[12]
  i526.rect = i527[13]
  request.r(i527[14], i527[15], 0, i526, 'targetTexture')
  i526.usePhysicalProperties = !!i527[16]
  i526.focalLength = i527[17]
  i526.sensorSize = new pc.Vec2( i527[18], i527[19] )
  i526.lensShift = new pc.Vec2( i527[20], i527[21] )
  i526.gateFit = i527[22]
  i526.commandBufferCount = i527[23]
  i526.cameraType = i527[24]
  i526.enabled = !!i527[25]
  return i526
}

Deserializers["Ctrl_GamePlay"] = function (request, data, root) {
  var i528 = root || request.c( 'Ctrl_GamePlay' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'TfRightX')
  request.r(i529[2], i529[3], 0, i528, '_tfPowerUpParent')
  request.r(i529[4], i529[5], 0, i528, '_bricksParent')
  request.r(i529[6], i529[7], 0, i528, '_ballsParent')
  request.r(i529[8], i529[9], 0, i528, '_levelLayoutControl')
  request.r(i529[10], i529[11], 0, i528, '_uiControl')
  request.r(i529[12], i529[13], 0, i528, '_ballControl')
  request.r(i529[14], i529[15], 0, i528, '_paddleControl')
  request.r(i529[16], i529[17], 0, i528, '_botBorderControl')
  request.r(i529[18], i529[19], 0, i528, '_powerUpExtraLiveControl')
  request.r(i529[20], i529[21], 0, i528, '_powerUpExtraBallControl')
  request.r(i529[22], i529[23], 0, i528, '_powerUpBallImmunityControl')
  i528._extraBallChance = i529[24]
  i528._ballsImmunityChance = i529[25]
  i528._extraBallMultiplier = i529[26]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i531 = data
  i530.pivot = new pc.Vec2( i531[0], i531[1] )
  i530.anchorMin = new pc.Vec2( i531[2], i531[3] )
  i530.anchorMax = new pc.Vec2( i531[4], i531[5] )
  i530.sizeDelta = new pc.Vec2( i531[6], i531[7] )
  i530.anchoredPosition3D = new pc.Vec3( i531[8], i531[9], i531[10] )
  i530.rotation = new pc.Quat(i531[11], i531[12], i531[13], i531[14])
  i530.scale = new pc.Vec3( i531[15], i531[16], i531[17] )
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i533 = data
  i532.planeDistance = i533[0]
  i532.referencePixelsPerUnit = i533[1]
  i532.isFallbackOverlay = !!i533[2]
  i532.renderMode = i533[3]
  i532.renderOrder = i533[4]
  i532.sortingLayerName = i533[5]
  i532.sortingOrder = i533[6]
  i532.scaleFactor = i533[7]
  request.r(i533[8], i533[9], 0, i532, 'worldCamera')
  i532.overrideSorting = !!i533[10]
  i532.pixelPerfect = !!i533[11]
  i532.targetDisplay = i533[12]
  i532.overridePixelPerfect = !!i533[13]
  i532.enabled = !!i533[14]
  return i532
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i535 = data
  i534.m_UiScaleMode = i535[0]
  i534.m_ReferencePixelsPerUnit = i535[1]
  i534.m_ScaleFactor = i535[2]
  i534.m_ReferenceResolution = new pc.Vec2( i535[3], i535[4] )
  i534.m_ScreenMatchMode = i535[5]
  i534.m_MatchWidthOrHeight = i535[6]
  i534.m_PhysicalUnit = i535[7]
  i534.m_FallbackScreenDPI = i535[8]
  i534.m_DefaultSpriteDPI = i535[9]
  i534.m_DynamicPixelsPerUnit = i535[10]
  i534.m_PresetInfoIsWorld = !!i535[11]
  return i534
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i537 = data
  i536.m_IgnoreReversedGraphics = !!i537[0]
  i536.m_BlockingObjects = i537[1]
  i536.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i537[2] )
  return i536
}

Deserializers["Ctrl_UIGamePlay"] = function (request, data, root) {
  var i538 = root || request.c( 'Ctrl_UIGamePlay' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, '_txtLives')
  request.r(i539[2], i539[3], 0, i538, '_txtScores')
  request.r(i539[4], i539[5], 0, i538, '_txtLevel')
  request.r(i539[6], i539[7], 0, i538, '_goResultPanel')
  request.r(i539[8], i539[9], 0, i538, '_txtResult')
  request.r(i539[10], i539[11], 0, i538, '_txtResultPanelScore')
  request.r(i539[12], i539[13], 0, i538, '_btnToMainMenu')
  request.r(i539[14], i539[15], 0, i538, '_btnToNextLevel')
  request.r(i539[16], i539[17], 0, i538, '_btnBack')
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i541 = data
  i540.cullTransparentMesh = !!i541[0]
  return i540
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.Image' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_Sprite')
  i542.m_Type = i543[2]
  i542.m_PreserveAspect = !!i543[3]
  i542.m_FillCenter = !!i543[4]
  i542.m_FillMethod = i543[5]
  i542.m_FillAmount = i543[6]
  i542.m_FillClockwise = !!i543[7]
  i542.m_FillOrigin = i543[8]
  i542.m_UseSpriteMesh = !!i543[9]
  i542.m_PixelsPerUnitMultiplier = i543[10]
  request.r(i543[11], i543[12], 0, i542, 'm_Material')
  i542.m_Maskable = !!i543[13]
  i542.m_Color = new pc.Color(i543[14], i543[15], i543[16], i543[17])
  i542.m_RaycastTarget = !!i543[18]
  i542.m_RaycastPadding = new pc.Vec4( i543[19], i543[20], i543[21], i543[22] )
  return i542
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.Text' )
  var i545 = data
  i544.m_FontData = request.d('UnityEngine.UI.FontData', i545[0], i544.m_FontData)
  i544.m_Text = i545[1]
  request.r(i545[2], i545[3], 0, i544, 'm_Material')
  i544.m_Maskable = !!i545[4]
  i544.m_Color = new pc.Color(i545[5], i545[6], i545[7], i545[8])
  i544.m_RaycastTarget = !!i545[9]
  i544.m_RaycastPadding = new pc.Vec4( i545[10], i545[11], i545[12], i545[13] )
  return i544
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.FontData' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'm_Font')
  i546.m_FontSize = i547[2]
  i546.m_FontStyle = i547[3]
  i546.m_BestFit = !!i547[4]
  i546.m_MinSize = i547[5]
  i546.m_MaxSize = i547[6]
  i546.m_Alignment = i547[7]
  i546.m_AlignByGeometry = !!i547[8]
  i546.m_RichText = !!i547[9]
  i546.m_HorizontalOverflow = i547[10]
  i546.m_VerticalOverflow = i547[11]
  i546.m_LineSpacing = i547[12]
  return i546
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.Button' )
  var i549 = data
  i548.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i549[0], i548.m_OnClick)
  i548.m_Navigation = request.d('UnityEngine.UI.Navigation', i549[1], i548.m_Navigation)
  i548.m_Transition = i549[2]
  i548.m_Colors = request.d('UnityEngine.UI.ColorBlock', i549[3], i548.m_Colors)
  i548.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i549[4], i548.m_SpriteState)
  i548.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i549[5], i548.m_AnimationTriggers)
  i548.m_Interactable = !!i549[6]
  request.r(i549[7], i549[8], 0, i548, 'm_TargetGraphic')
  return i548
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i551 = data
  i550.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i551[0], i550.m_PersistentCalls)
  return i550
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i553 = data
  var i555 = i553[0]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i555.length; i += 1) {
    i554.add(request.d('UnityEngine.Events.PersistentCall', i555[i + 0]));
  }
  i552.m_Calls = i554
  return i552
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'm_Target')
  i558.m_TargetAssemblyTypeName = i559[2]
  i558.m_MethodName = i559[3]
  i558.m_Mode = i559[4]
  i558.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i559[5], i558.m_Arguments)
  i558.m_CallState = i559[6]
  return i558
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i561 = data
  i560.m_Mode = i561[0]
  i560.m_WrapAround = !!i561[1]
  request.r(i561[2], i561[3], 0, i560, 'm_SelectOnUp')
  request.r(i561[4], i561[5], 0, i560, 'm_SelectOnDown')
  request.r(i561[6], i561[7], 0, i560, 'm_SelectOnLeft')
  request.r(i561[8], i561[9], 0, i560, 'm_SelectOnRight')
  return i560
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i563 = data
  i562.m_NormalColor = new pc.Color(i563[0], i563[1], i563[2], i563[3])
  i562.m_HighlightedColor = new pc.Color(i563[4], i563[5], i563[6], i563[7])
  i562.m_PressedColor = new pc.Color(i563[8], i563[9], i563[10], i563[11])
  i562.m_SelectedColor = new pc.Color(i563[12], i563[13], i563[14], i563[15])
  i562.m_DisabledColor = new pc.Color(i563[16], i563[17], i563[18], i563[19])
  i562.m_ColorMultiplier = i563[20]
  i562.m_FadeDuration = i563[21]
  return i562
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'm_HighlightedSprite')
  request.r(i565[2], i565[3], 0, i564, 'm_PressedSprite')
  request.r(i565[4], i565[5], 0, i564, 'm_SelectedSprite')
  request.r(i565[6], i565[7], 0, i564, 'm_DisabledSprite')
  return i564
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i567 = data
  i566.m_NormalTrigger = i567[0]
  i566.m_HighlightedTrigger = i567[1]
  i566.m_PressedTrigger = i567[2]
  i566.m_SelectedTrigger = i567[3]
  i566.m_DisabledTrigger = i567[4]
  return i566
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i568 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i569 = data
  i568.m_hasFontAssetChanged = !!i569[0]
  request.r(i569[1], i569[2], 0, i568, 'm_baseMaterial')
  i568.m_maskOffset = new pc.Vec4( i569[3], i569[4], i569[5], i569[6] )
  i568.m_text = i569[7]
  i568.m_isRightToLeft = !!i569[8]
  request.r(i569[9], i569[10], 0, i568, 'm_fontAsset')
  request.r(i569[11], i569[12], 0, i568, 'm_sharedMaterial')
  var i571 = i569[13]
  var i570 = []
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 2, i570, '')
  }
  i568.m_fontSharedMaterials = i570
  request.r(i569[14], i569[15], 0, i568, 'm_fontMaterial')
  var i573 = i569[16]
  var i572 = []
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 2, i572, '')
  }
  i568.m_fontMaterials = i572
  i568.m_fontColor32 = UnityEngine.Color32.ConstructColor(i569[17], i569[18], i569[19], i569[20])
  i568.m_fontColor = new pc.Color(i569[21], i569[22], i569[23], i569[24])
  i568.m_enableVertexGradient = !!i569[25]
  i568.m_colorMode = i569[26]
  i568.m_fontColorGradient = request.d('TMPro.VertexGradient', i569[27], i568.m_fontColorGradient)
  request.r(i569[28], i569[29], 0, i568, 'm_fontColorGradientPreset')
  request.r(i569[30], i569[31], 0, i568, 'm_spriteAsset')
  i568.m_tintAllSprites = !!i569[32]
  request.r(i569[33], i569[34], 0, i568, 'm_StyleSheet')
  i568.m_TextStyleHashCode = i569[35]
  i568.m_overrideHtmlColors = !!i569[36]
  i568.m_faceColor = UnityEngine.Color32.ConstructColor(i569[37], i569[38], i569[39], i569[40])
  i568.m_fontSize = i569[41]
  i568.m_fontSizeBase = i569[42]
  i568.m_fontWeight = i569[43]
  i568.m_enableAutoSizing = !!i569[44]
  i568.m_fontSizeMin = i569[45]
  i568.m_fontSizeMax = i569[46]
  i568.m_fontStyle = i569[47]
  i568.m_HorizontalAlignment = i569[48]
  i568.m_VerticalAlignment = i569[49]
  i568.m_textAlignment = i569[50]
  i568.m_characterSpacing = i569[51]
  i568.m_wordSpacing = i569[52]
  i568.m_lineSpacing = i569[53]
  i568.m_lineSpacingMax = i569[54]
  i568.m_paragraphSpacing = i569[55]
  i568.m_charWidthMaxAdj = i569[56]
  i568.m_enableWordWrapping = !!i569[57]
  i568.m_wordWrappingRatios = i569[58]
  i568.m_overflowMode = i569[59]
  request.r(i569[60], i569[61], 0, i568, 'm_linkedTextComponent')
  request.r(i569[62], i569[63], 0, i568, 'parentLinkedComponent')
  i568.m_enableKerning = !!i569[64]
  i568.m_enableExtraPadding = !!i569[65]
  i568.checkPaddingRequired = !!i569[66]
  i568.m_isRichText = !!i569[67]
  i568.m_parseCtrlCharacters = !!i569[68]
  i568.m_isOrthographic = !!i569[69]
  i568.m_isCullingEnabled = !!i569[70]
  i568.m_horizontalMapping = i569[71]
  i568.m_verticalMapping = i569[72]
  i568.m_uvLineOffset = i569[73]
  i568.m_geometrySortingOrder = i569[74]
  i568.m_IsTextObjectScaleStatic = !!i569[75]
  i568.m_VertexBufferAutoSizeReduction = !!i569[76]
  i568.m_useMaxVisibleDescender = !!i569[77]
  i568.m_pageToDisplay = i569[78]
  i568.m_margin = new pc.Vec4( i569[79], i569[80], i569[81], i569[82] )
  i568.m_isUsingLegacyAnimationComponent = !!i569[83]
  i568.m_isVolumetricText = !!i569[84]
  request.r(i569[85], i569[86], 0, i568, 'm_Material')
  i568.m_Maskable = !!i569[87]
  i568.m_Color = new pc.Color(i569[88], i569[89], i569[90], i569[91])
  i568.m_RaycastTarget = !!i569[92]
  i568.m_RaycastPadding = new pc.Vec4( i569[93], i569[94], i569[95], i569[96] )
  return i568
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i574 = root || request.c( 'TMPro.VertexGradient' )
  var i575 = data
  i574.topLeft = new pc.Color(i575[0], i575[1], i575[2], i575[3])
  i574.topRight = new pc.Color(i575[4], i575[5], i575[6], i575[7])
  i574.bottomLeft = new pc.Color(i575[8], i575[9], i575[10], i575[11])
  i574.bottomRight = new pc.Color(i575[12], i575[13], i575[14], i575[15])
  return i574
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'm_FirstSelected')
  i576.m_sendNavigationEvents = !!i577[2]
  i576.m_DragThreshold = i577[3]
  return i576
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i579 = data
  i578.m_HorizontalAxis = i579[0]
  i578.m_VerticalAxis = i579[1]
  i578.m_SubmitButton = i579[2]
  i578.m_CancelButton = i579[3]
  i578.m_InputActionsPerSecond = i579[4]
  i578.m_RepeatDelay = i579[5]
  i578.m_ForceModuleActive = !!i579[6]
  i578.m_SendPointerHoverToParent = !!i579[7]
  return i578
}

Deserializers["Hlpr_ResizeSpriteFullScreen"] = function (request, data, root) {
  var i580 = root || request.c( 'Hlpr_ResizeSpriteFullScreen' )
  var i581 = data
  return i580
}

Deserializers["Ctrl_BotBorder"] = function (request, data, root) {
  var i582 = root || request.c( 'Ctrl_BotBorder' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, '_boxCollider')
  request.r(i583[2], i583[3], 0, i582, '_gamePlayControl')
  request.r(i583[4], i583[5], 0, i582, '_goImmunityBar')
  i582._triggerDisableTimer = i583[6]
  return i582
}

Deserializers["Ctrl_LevelLayout"] = function (request, data, root) {
  var i584 = root || request.c( 'Ctrl_LevelLayout' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'Level')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i587 = data
  i586.ambientIntensity = i587[0]
  i586.reflectionIntensity = i587[1]
  i586.ambientMode = i587[2]
  i586.ambientLight = new pc.Color(i587[3], i587[4], i587[5], i587[6])
  i586.ambientSkyColor = new pc.Color(i587[7], i587[8], i587[9], i587[10])
  i586.ambientGroundColor = new pc.Color(i587[11], i587[12], i587[13], i587[14])
  i586.ambientEquatorColor = new pc.Color(i587[15], i587[16], i587[17], i587[18])
  i586.fogColor = new pc.Color(i587[19], i587[20], i587[21], i587[22])
  i586.fogEndDistance = i587[23]
  i586.fogStartDistance = i587[24]
  i586.fogDensity = i587[25]
  i586.fog = !!i587[26]
  request.r(i587[27], i587[28], 0, i586, 'skybox')
  i586.fogMode = i587[29]
  var i589 = i587[30]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i589[i + 0]) );
  }
  i586.lightmaps = i588
  i586.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i587[31], i586.lightProbes)
  i586.lightmapsMode = i587[32]
  i586.mixedBakeMode = i587[33]
  i586.environmentLightingMode = i587[34]
  i586.ambientProbe = new pc.SphericalHarmonicsL2(i587[35])
  i586.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i587[36])
  i586.useReferenceAmbientProbe = !!i587[37]
  request.r(i587[38], i587[39], 0, i586, 'customReflection')
  request.r(i587[40], i587[41], 0, i586, 'defaultReflection')
  i586.defaultReflectionMode = i587[42]
  i586.defaultReflectionResolution = i587[43]
  i586.sunLightObjectId = i587[44]
  i586.pixelLightCount = i587[45]
  i586.defaultReflectionHDR = !!i587[46]
  i586.hasLightDataAsset = !!i587[47]
  i586.hasManualGenerate = !!i587[48]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'lightmapColor')
  request.r(i593[2], i593[3], 0, i592, 'lightmapDirection')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i594 = root || new UnityEngine.LightProbes()
  var i595 = data
  return i594
}

Deserializers["Ctrl_UIMainMenu"] = function (request, data, root) {
  var i602 = root || request.c( 'Ctrl_UIMainMenu' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, '_btnPlay')
  request.r(i603[2], i603[3], 0, i602, '_btnQuit')
  request.r(i603[4], i603[5], 0, i602, '_txtHighScore')
  return i602
}

Deserializers["Ctrl_Brick"] = function (request, data, root) {
  var i604 = root || request.c( 'Ctrl_Brick' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, '_sr')
  i604._hitPoints = i605[2]
  i604._scores = i605[3]
  i604._powerUpChance = i605[4]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i607 = data
  i606.name = i607[0]
  i606.bounciness = i607[1]
  i606.friction = i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i609 = data
  var i611 = i609[0]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i611.length; i += 1) {
    i610.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i611[i + 0]));
  }
  i608.ShaderCompilationErrors = i610
  i608.name = i609[1]
  i608.guid = i609[2]
  var i613 = i609[3]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( i613[i + 0] );
  }
  i608.shaderDefinedKeywords = i612
  var i615 = i609[4]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i615[i + 0]) );
  }
  i608.passes = i614
  var i617 = i609[5]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i617[i + 0]) );
  }
  i608.usePasses = i616
  var i619 = i609[6]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i619[i + 0]) );
  }
  i608.defaultParameterValues = i618
  request.r(i609[7], i609[8], 0, i608, 'unityFallbackShader')
  i608.readDepth = !!i609[9]
  i608.hasDepthOnlyPass = !!i609[10]
  i608.isCreatedByShaderGraph = !!i609[11]
  i608.disableBatching = !!i609[12]
  i608.compiled = !!i609[13]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i623 = data
  i622.shaderName = i623[0]
  i622.errorMessage = i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i628 = root || new pc.UnityShaderPass()
  var i629 = data
  i628.id = i629[0]
  i628.subShaderIndex = i629[1]
  i628.name = i629[2]
  i628.passType = i629[3]
  i628.grabPassTextureName = i629[4]
  i628.usePass = !!i629[5]
  i628.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[6], i628.zTest)
  i628.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[7], i628.zWrite)
  i628.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[8], i628.culling)
  i628.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i629[9], i628.blending)
  i628.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i629[10], i628.alphaBlending)
  i628.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[11], i628.colorWriteMask)
  i628.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[12], i628.offsetUnits)
  i628.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[13], i628.offsetFactor)
  i628.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[14], i628.stencilRef)
  i628.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[15], i628.stencilReadMask)
  i628.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[16], i628.stencilWriteMask)
  i628.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i629[17], i628.stencilOp)
  i628.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i629[18], i628.stencilOpFront)
  i628.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i629[19], i628.stencilOpBack)
  var i631 = i629[20]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i631[i + 0]) );
  }
  i628.tags = i630
  var i633 = i629[21]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( i633[i + 0] );
  }
  i628.passDefinedKeywords = i632
  var i635 = i629[22]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i635[i + 0]) );
  }
  i628.passDefinedKeywordGroups = i634
  var i637 = i629[23]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i637[i + 0]) );
  }
  i628.variants = i636
  var i639 = i629[24]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i639[i + 0]) );
  }
  i628.excludedVariants = i638
  i628.hasDepthReader = !!i629[25]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i641 = data
  i640.val = i641[0]
  i640.name = i641[1]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i643 = data
  i642.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[0], i642.src)
  i642.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[1], i642.dst)
  i642.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[2], i642.op)
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i645 = data
  i644.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[0], i644.pass)
  i644.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[1], i644.fail)
  i644.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[2], i644.zFail)
  i644.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[3], i644.comp)
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i649 = data
  i648.name = i649[0]
  i648.value = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i653 = data
  var i655 = i653[0]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( i655[i + 0] );
  }
  i652.keywords = i654
  i652.hasDiscard = !!i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i659 = data
  i658.passId = i659[0]
  i658.subShaderIndex = i659[1]
  var i661 = i659[2]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i658.keywords = i660
  i658.vertexProgram = i659[3]
  i658.fragmentProgram = i659[4]
  i658.exportedForWebGl2 = !!i659[5]
  i658.readDepth = !!i659[6]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'shader')
  i664.pass = i665[2]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i669 = data
  i668.name = i669[0]
  i668.type = i669[1]
  i668.value = new pc.Vec4( i669[2], i669[3], i669[4], i669[5] )
  i668.textureValue = i669[6]
  i668.shaderPropertyFlag = i669[7]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i671 = data
  i670.name = i671[0]
  request.r(i671[1], i671[2], 0, i670, 'texture')
  i670.aabb = i671[3]
  i670.vertices = i671[4]
  i670.triangles = i671[5]
  i670.textureRect = UnityEngine.Rect.MinMaxRect(i671[6], i671[7], i671[8], i671[9])
  i670.packedRect = UnityEngine.Rect.MinMaxRect(i671[10], i671[11], i671[12], i671[13])
  i670.border = new pc.Vec4( i671[14], i671[15], i671[16], i671[17] )
  i670.transparency = i671[18]
  i670.bounds = i671[19]
  i670.pixelsPerUnit = i671[20]
  i670.textureWidth = i671[21]
  i670.textureHeight = i671[22]
  i670.nativeSize = new pc.Vec2( i671[23], i671[24] )
  i670.pivot = new pc.Vec2( i671[25], i671[26] )
  i670.textureRectOffset = new pc.Vec2( i671[27], i671[28] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i673 = data
  i672.name = i673[0]
  i672.ascent = i673[1]
  i672.originalLineHeight = i673[2]
  i672.fontSize = i673[3]
  var i675 = i673[4]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i675[i + 0]) );
  }
  i672.characterInfo = i674
  request.r(i673[5], i673[6], 0, i672, 'texture')
  i672.originalFontSize = i673[7]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i679 = data
  i678.index = i679[0]
  i678.advance = i679[1]
  i678.bearing = i679[2]
  i678.glyphWidth = i679[3]
  i678.glyphHeight = i679[4]
  i678.minX = i679[5]
  i678.maxX = i679[6]
  i678.minY = i679[7]
  i678.maxY = i679[8]
  i678.uvBottomLeftX = i679[9]
  i678.uvBottomLeftY = i679[10]
  i678.uvBottomRightX = i679[11]
  i678.uvBottomRightY = i679[12]
  i678.uvTopLeftX = i679[13]
  i678.uvTopLeftY = i679[14]
  i678.uvTopRightX = i679[15]
  i678.uvTopRightY = i679[16]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i681 = data
  i680.name = i681[0]
  i680.bytes64 = i681[1]
  i680.data = i681[2]
  return i680
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i682 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'atlas')
  i682.normalStyle = i683[2]
  i682.normalSpacingOffset = i683[3]
  i682.boldStyle = i683[4]
  i682.boldSpacing = i683[5]
  i682.italicStyle = i683[6]
  i682.tabSize = i683[7]
  i682.hashCode = i683[8]
  request.r(i683[9], i683[10], 0, i682, 'material')
  i682.materialHashCode = i683[11]
  i682.m_Version = i683[12]
  i682.m_SourceFontFileGUID = i683[13]
  request.r(i683[14], i683[15], 0, i682, 'm_SourceFontFile_EditorRef')
  request.r(i683[16], i683[17], 0, i682, 'm_SourceFontFile')
  i682.m_AtlasPopulationMode = i683[18]
  i682.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i683[19], i682.m_FaceInfo)
  var i685 = i683[20]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('UnityEngine.TextCore.Glyph', i685[i + 0]));
  }
  i682.m_GlyphTable = i684
  var i687 = i683[21]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d('TMPro.TMP_Character', i687[i + 0]));
  }
  i682.m_CharacterTable = i686
  var i689 = i683[22]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i682.m_AtlasTextures = i688
  i682.m_AtlasTextureIndex = i683[23]
  i682.m_IsMultiAtlasTexturesEnabled = !!i683[24]
  i682.m_ClearDynamicDataOnBuild = !!i683[25]
  var i691 = i683[26]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(request.d('UnityEngine.TextCore.GlyphRect', i691[i + 0]));
  }
  i682.m_UsedGlyphRects = i690
  var i693 = i683[27]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i693.length; i += 1) {
    i692.add(request.d('UnityEngine.TextCore.GlyphRect', i693[i + 0]));
  }
  i682.m_FreeGlyphRects = i692
  i682.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i683[28], i682.m_fontInfo)
  i682.m_AtlasWidth = i683[29]
  i682.m_AtlasHeight = i683[30]
  i682.m_AtlasPadding = i683[31]
  i682.m_AtlasRenderMode = i683[32]
  var i695 = i683[33]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i695.length; i += 1) {
    i694.add(request.d('TMPro.TMP_Glyph', i695[i + 0]));
  }
  i682.m_glyphInfoList = i694
  i682.m_KerningTable = request.d('TMPro.KerningTable', i683[34], i682.m_KerningTable)
  i682.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i683[35], i682.m_FontFeatureTable)
  var i697 = i683[36]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 1, i696, '')
  }
  i682.fallbackFontAssets = i696
  var i699 = i683[37]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i682.m_FallbackFontAssetTable = i698
  i682.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i683[38], i682.m_CreationSettings)
  var i701 = i683[39]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('TMPro.TMP_FontWeightPair', i701[i + 0]) );
  }
  i682.m_FontWeightTable = i700
  var i703 = i683[40]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('TMPro.TMP_FontWeightPair', i703[i + 0]) );
  }
  i682.fontWeights = i702
  return i682
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i705 = data
  i704.m_FaceIndex = i705[0]
  i704.m_FamilyName = i705[1]
  i704.m_StyleName = i705[2]
  i704.m_PointSize = i705[3]
  i704.m_Scale = i705[4]
  i704.m_UnitsPerEM = i705[5]
  i704.m_LineHeight = i705[6]
  i704.m_AscentLine = i705[7]
  i704.m_CapLine = i705[8]
  i704.m_MeanLine = i705[9]
  i704.m_Baseline = i705[10]
  i704.m_DescentLine = i705[11]
  i704.m_SuperscriptOffset = i705[12]
  i704.m_SuperscriptSize = i705[13]
  i704.m_SubscriptOffset = i705[14]
  i704.m_SubscriptSize = i705[15]
  i704.m_UnderlineOffset = i705[16]
  i704.m_UnderlineThickness = i705[17]
  i704.m_StrikethroughOffset = i705[18]
  i704.m_StrikethroughThickness = i705[19]
  i704.m_TabWidth = i705[20]
  return i704
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i709 = data
  i708.m_Index = i709[0]
  i708.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i709[1], i708.m_Metrics)
  i708.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i709[2], i708.m_GlyphRect)
  i708.m_Scale = i709[3]
  i708.m_AtlasIndex = i709[4]
  i708.m_ClassDefinitionType = i709[5]
  return i708
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i711 = data
  i710.m_Width = i711[0]
  i710.m_Height = i711[1]
  i710.m_HorizontalBearingX = i711[2]
  i710.m_HorizontalBearingY = i711[3]
  i710.m_HorizontalAdvance = i711[4]
  return i710
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i713 = data
  i712.m_X = i713[0]
  i712.m_Y = i713[1]
  i712.m_Width = i713[2]
  i712.m_Height = i713[3]
  return i712
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i716 = root || request.c( 'TMPro.TMP_Character' )
  var i717 = data
  i716.m_ElementType = i717[0]
  i716.m_Unicode = i717[1]
  i716.m_GlyphIndex = i717[2]
  i716.m_Scale = i717[3]
  return i716
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i722 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i723 = data
  i722.Name = i723[0]
  i722.PointSize = i723[1]
  i722.Scale = i723[2]
  i722.CharacterCount = i723[3]
  i722.LineHeight = i723[4]
  i722.Baseline = i723[5]
  i722.Ascender = i723[6]
  i722.CapHeight = i723[7]
  i722.Descender = i723[8]
  i722.CenterLine = i723[9]
  i722.SuperscriptOffset = i723[10]
  i722.SubscriptOffset = i723[11]
  i722.SubSize = i723[12]
  i722.Underline = i723[13]
  i722.UnderlineThickness = i723[14]
  i722.strikethrough = i723[15]
  i722.strikethroughThickness = i723[16]
  i722.TabWidth = i723[17]
  i722.Padding = i723[18]
  i722.AtlasWidth = i723[19]
  i722.AtlasHeight = i723[20]
  return i722
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i726 = root || request.c( 'TMPro.TMP_Glyph' )
  var i727 = data
  i726.id = i727[0]
  i726.x = i727[1]
  i726.y = i727[2]
  i726.width = i727[3]
  i726.height = i727[4]
  i726.xOffset = i727[5]
  i726.yOffset = i727[6]
  i726.xAdvance = i727[7]
  i726.scale = i727[8]
  return i726
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.KerningTable' )
  var i729 = data
  var i731 = i729[0]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('TMPro.KerningPair', i731[i + 0]));
  }
  i728.kerningPairs = i730
  return i728
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i734 = root || request.c( 'TMPro.KerningPair' )
  var i735 = data
  i734.xOffset = i735[0]
  i734.m_FirstGlyph = i735[1]
  i734.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i735[2], i734.m_FirstGlyphAdjustments)
  i734.m_SecondGlyph = i735[3]
  i734.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i735[4], i734.m_SecondGlyphAdjustments)
  i734.m_IgnoreSpacingAdjustments = !!i735[5]
  return i734
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i736 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i737 = data
  var i739 = i737[0]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i739[i + 0]));
  }
  i736.m_GlyphPairAdjustmentRecords = i738
  return i736
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i743 = data
  i742.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i743[0], i742.m_FirstAdjustmentRecord)
  i742.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i743[1], i742.m_SecondAdjustmentRecord)
  i742.m_FeatureLookupFlags = i743[2]
  return i742
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i747 = data
  i746.sourceFontFileName = i747[0]
  i746.sourceFontFileGUID = i747[1]
  i746.pointSizeSamplingMode = i747[2]
  i746.pointSize = i747[3]
  i746.padding = i747[4]
  i746.packingMode = i747[5]
  i746.atlasWidth = i747[6]
  i746.atlasHeight = i747[7]
  i746.characterSetSelectionMode = i747[8]
  i746.characterSequence = i747[9]
  i746.referencedFontAssetGUID = i747[10]
  i746.referencedTextAssetGUID = i747[11]
  i746.fontStyle = i747[12]
  i746.fontStyleModifier = i747[13]
  i746.renderMode = i747[14]
  i746.includeFontFeatures = !!i747[15]
  return i746
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i750 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'regularTypeface')
  request.r(i751[2], i751[3], 0, i750, 'italicTypeface')
  return i750
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i752 = root || request.c( 'TMPro.TMP_Settings' )
  var i753 = data
  i752.m_enableWordWrapping = !!i753[0]
  i752.m_enableKerning = !!i753[1]
  i752.m_enableExtraPadding = !!i753[2]
  i752.m_enableTintAllSprites = !!i753[3]
  i752.m_enableParseEscapeCharacters = !!i753[4]
  i752.m_EnableRaycastTarget = !!i753[5]
  i752.m_GetFontFeaturesAtRuntime = !!i753[6]
  i752.m_missingGlyphCharacter = i753[7]
  i752.m_warningsDisabled = !!i753[8]
  request.r(i753[9], i753[10], 0, i752, 'm_defaultFontAsset')
  i752.m_defaultFontAssetPath = i753[11]
  i752.m_defaultFontSize = i753[12]
  i752.m_defaultAutoSizeMinRatio = i753[13]
  i752.m_defaultAutoSizeMaxRatio = i753[14]
  i752.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i753[15], i753[16] )
  i752.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i753[17], i753[18] )
  i752.m_autoSizeTextContainer = !!i753[19]
  i752.m_IsTextObjectScaleStatic = !!i753[20]
  var i755 = i753[21]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i752.m_fallbackFontAssets = i754
  i752.m_matchMaterialPreset = !!i753[22]
  request.r(i753[23], i753[24], 0, i752, 'm_defaultSpriteAsset')
  i752.m_defaultSpriteAssetPath = i753[25]
  i752.m_enableEmojiSupport = !!i753[26]
  i752.m_MissingCharacterSpriteUnicode = i753[27]
  i752.m_defaultColorGradientPresetsPath = i753[28]
  request.r(i753[29], i753[30], 0, i752, 'm_defaultStyleSheet')
  i752.m_StyleSheetsResourcePath = i753[31]
  request.r(i753[32], i753[33], 0, i752, 'm_leadingCharacters')
  request.r(i753[34], i753[35], 0, i752, 'm_followingCharacters')
  i752.m_UseModernHangulLineBreakingRules = !!i753[36]
  return i752
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i756 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i757 = data
  i756.m_GlyphIndex = i757[0]
  i756.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i757[1], i756.m_GlyphValueRecord)
  return i756
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i759 = data
  i758.m_XPlacement = i759[0]
  i758.m_YPlacement = i759[1]
  i758.m_XAdvance = i759[2]
  i758.m_YAdvance = i759[3]
  return i758
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i760 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'spriteSheet')
  var i763 = i761[2]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('TMPro.TMP_Sprite', i763[i + 0]));
  }
  i760.spriteInfoList = i762
  var i765 = i761[3]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i760.fallbackSpriteAssets = i764
  i760.hashCode = i761[4]
  request.r(i761[5], i761[6], 0, i760, 'material')
  i760.materialHashCode = i761[7]
  i760.m_Version = i761[8]
  i760.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i761[9], i760.m_FaceInfo)
  var i767 = i761[10]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('TMPro.TMP_SpriteCharacter', i767[i + 0]));
  }
  i760.m_SpriteCharacterTable = i766
  var i769 = i761[11]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('TMPro.TMP_SpriteGlyph', i769[i + 0]));
  }
  i760.m_SpriteGlyphTable = i768
  return i760
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TMP_Sprite' )
  var i773 = data
  i772.name = i773[0]
  i772.hashCode = i773[1]
  i772.unicode = i773[2]
  i772.pivot = new pc.Vec2( i773[3], i773[4] )
  request.r(i773[5], i773[6], 0, i772, 'sprite')
  i772.id = i773[7]
  i772.x = i773[8]
  i772.y = i773[9]
  i772.width = i773[10]
  i772.height = i773[11]
  i772.xOffset = i773[12]
  i772.yOffset = i773[13]
  i772.xAdvance = i773[14]
  i772.scale = i773[15]
  return i772
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i779 = data
  i778.m_Name = i779[0]
  i778.m_HashCode = i779[1]
  i778.m_ElementType = i779[2]
  i778.m_Unicode = i779[3]
  i778.m_GlyphIndex = i779[4]
  i778.m_Scale = i779[5]
  return i778
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'sprite')
  i782.m_Index = i783[2]
  i782.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i783[3], i782.m_Metrics)
  i782.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i783[4], i782.m_GlyphRect)
  i782.m_Scale = i783[5]
  i782.m_AtlasIndex = i783[6]
  i782.m_ClassDefinitionType = i783[7]
  return i782
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('TMPro.TMP_Style', i787[i + 0]));
  }
  i784.m_StyleList = i786
  return i784
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i790 = root || request.c( 'TMPro.TMP_Style' )
  var i791 = data
  i790.m_Name = i791[0]
  i790.m_HashCode = i791[1]
  i790.m_OpeningDefinition = i791[2]
  i790.m_ClosingDefinition = i791[3]
  i790.m_OpeningTagArray = i791[4]
  i790.m_ClosingTagArray = i791[5]
  i790.m_OpeningTagUnicodeArray = i791[6]
  i790.m_ClosingTagUnicodeArray = i791[7]
  return i790
}

Deserializers["So_LevelData"] = function (request, data, root) {
  var i792 = root || request.c( 'So_LevelData' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(i795[i + 0]);
  }
  i792.x = i794
  var i797 = i793[1]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(i797[i + 0]);
  }
  i792.y = i796
  var i799 = i793[2]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('E_BrickType')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(i799[i + 0]);
  }
  i792.BrickColorList = i798
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i807[i + 0]) );
  }
  i804.files = i806
  i804.componentToPrefabIds = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i811 = data
  i810.path = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'unityObject')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i813 = data
  var i815 = i813[0]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i815[i + 0]) );
  }
  i812.scriptsExecutionOrder = i814
  var i817 = i813[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i817[i + 0]) );
  }
  i812.sortingLayers = i816
  var i819 = i813[2]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i819[i + 0]) );
  }
  i812.cullingLayers = i818
  i812.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i813[3], i812.timeSettings)
  i812.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i813[4], i812.physicsSettings)
  i812.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i813[5], i812.physics2DSettings)
  i812.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i813[6], i812.qualitySettings)
  i812.enableRealtimeShadows = !!i813[7]
  i812.enableAutoInstancing = !!i813[8]
  i812.enableStaticBatching = !!i813[9]
  i812.enableDynamicBatching = !!i813[10]
  i812.lightmapEncodingQuality = i813[11]
  i812.desiredColorSpace = i813[12]
  var i821 = i813[13]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i812.allTags = i820
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i825 = data
  i824.name = i825[0]
  i824.value = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i829 = data
  i828.id = i829[0]
  i828.name = i829[1]
  i828.value = i829[2]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i833 = data
  i832.id = i833[0]
  i832.name = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i835 = data
  i834.fixedDeltaTime = i835[0]
  i834.maximumDeltaTime = i835[1]
  i834.timeScale = i835[2]
  i834.maximumParticleTimestep = i835[3]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i837 = data
  i836.gravity = new pc.Vec3( i837[0], i837[1], i837[2] )
  i836.defaultSolverIterations = i837[3]
  i836.bounceThreshold = i837[4]
  i836.autoSyncTransforms = !!i837[5]
  i836.autoSimulation = !!i837[6]
  var i839 = i837[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i839[i + 0]) );
  }
  i836.collisionMatrix = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i843 = data
  i842.enabled = !!i843[0]
  i842.layerId = i843[1]
  i842.otherLayerId = i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'material')
  i844.gravity = new pc.Vec2( i845[2], i845[3] )
  i844.positionIterations = i845[4]
  i844.velocityIterations = i845[5]
  i844.velocityThreshold = i845[6]
  i844.maxLinearCorrection = i845[7]
  i844.maxAngularCorrection = i845[8]
  i844.maxTranslationSpeed = i845[9]
  i844.maxRotationSpeed = i845[10]
  i844.baumgarteScale = i845[11]
  i844.baumgarteTOIScale = i845[12]
  i844.timeToSleep = i845[13]
  i844.linearSleepTolerance = i845[14]
  i844.angularSleepTolerance = i845[15]
  i844.defaultContactOffset = i845[16]
  i844.autoSimulation = !!i845[17]
  i844.queriesHitTriggers = !!i845[18]
  i844.queriesStartInColliders = !!i845[19]
  i844.callbacksOnDisable = !!i845[20]
  i844.reuseCollisionCallbacks = !!i845[21]
  i844.autoSyncTransforms = !!i845[22]
  var i847 = i845[23]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i847[i + 0]) );
  }
  i844.collisionMatrix = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i851 = data
  i850.enabled = !!i851[0]
  i850.layerId = i851[1]
  i850.otherLayerId = i851[2]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i853 = data
  var i855 = i853[0]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i855[i + 0]) );
  }
  i852.qualityLevels = i854
  var i857 = i853[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i852.names = i856
  i852.shadows = i853[2]
  i852.anisotropicFiltering = i853[3]
  i852.antiAliasing = i853[4]
  i852.lodBias = i853[5]
  i852.shadowCascades = i853[6]
  i852.shadowDistance = i853[7]
  i852.shadowmaskMode = i853[8]
  i852.shadowProjection = i853[9]
  i852.shadowResolution = i853[10]
  i852.softParticles = !!i853[11]
  i852.softVegetation = !!i853[12]
  i852.activeColorSpace = i853[13]
  i852.desiredColorSpace = i853[14]
  i852.masterTextureLimit = i853[15]
  i852.maxQueuedFrames = i853[16]
  i852.particleRaycastBudget = i853[17]
  i852.pixelLightCount = i853[18]
  i852.realtimeReflectionProbes = !!i853[19]
  i852.shadowCascade2Split = i853[20]
  i852.shadowCascade4Split = new pc.Vec3( i853[21], i853[22], i853[23] )
  i852.streamingMipmapsActive = !!i853[24]
  i852.vSyncCount = i853[25]
  i852.asyncUploadBufferSize = i853[26]
  i852.asyncUploadTimeSlice = i853[27]
  i852.billboardsFaceCameraPosition = !!i853[28]
  i852.shadowNearPlaneOffset = i853[29]
  i852.streamingMipmapsMemoryBudget = i853[30]
  i852.maximumLODLevel = i853[31]
  i852.streamingMipmapsAddAllCameras = !!i853[32]
  i852.streamingMipmapsMaxLevelReduction = i853[33]
  i852.streamingMipmapsRenderersPerFrame = i853[34]
  i852.resolutionScalingFixedDPIFactor = i853[35]
  i852.streamingMipmapsMaxFileIORequests = i853[36]
  i852.currentQualityLevel = i853[37]
  return i852
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_ObjectArgument')
  i860.m_ObjectArgumentAssemblyTypeName = i861[2]
  i860.m_IntArgument = i861[3]
  i860.m_FloatArgument = i861[4]
  i860.m_StringArgument = i861[5]
  i860.m_BoolArgument = !!i861[6]
  return i860
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i863 = data
  i862.xPlacement = i863[0]
  i862.yPlacement = i863[1]
  i862.xAdvance = i863[2]
  i862.yAdvance = i863[3]
  return i862
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[6],"66":[6],"67":[6],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[17],"79":[80],"81":[82],"83":[82],"24":[23],"84":[17],"85":[23],"86":[80,23],"29":[23,31],"87":[23],"88":[31,23],"89":[80],"90":[31,23],"91":[23],"92":[23],"93":[23],"27":[24],"32":[31,23],"94":[23],"26":[24],"95":[23],"96":[23],"97":[23],"98":[23],"99":[23],"100":[23],"101":[23],"102":[23],"103":[23],"104":[31,23],"105":[23],"106":[23],"107":[23],"108":[23],"28":[31,23],"109":[23],"110":[35],"111":[35],"36":[35],"112":[35],"113":[17],"114":[17],"115":[7],"116":[117]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","Ctrl_Ball","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.BoxCollider2D","Ctrl_Paddle","Ctrl_GamePlay","UnityEngine.PolygonCollider2D","UnityEngine.CapsuleCollider2D","Ctrl_PowerUp","GameManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.GameObject","Ctrl_LevelLayout","Ctrl_UIGamePlay","Ctrl_BotBorder","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Text","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Font","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Hlpr_ResizeSpriteFullScreen","Ctrl_UIMainMenu","Ctrl_Brick","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","So_LevelData","UnityEditor.SceneAsset","UnityEditor.MonoScript","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer"]

Deserializers.unityVersion = "2021.3.45f2";

Deserializers.productName = "2DPONG";

Deserializers.lunaInitializationTime = "02/12/2026 07:26:55";

Deserializers.lunaDaysRunning = "0.5";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "36963";

Deserializers.projectId = "1ba6a50e3498656478a31e980c36d39d";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1693";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3576";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "com.DefaultCompany.TwoDPong";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "1933ed3f-82e2-4e6a-85b4-b159eb8e6602";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Bootstrapper","Execute"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

