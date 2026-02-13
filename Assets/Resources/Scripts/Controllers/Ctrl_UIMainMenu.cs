using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class Ctrl_UIMainMenu : MonoBehaviour
{
    [SerializeField] private Button _btnPlay;
    [SerializeField] private Button _btnQuit;
    [SerializeField] private Text _txtHighScore;

    private const string STRFMT_HIGHSCORE = "High Score : {0}";
    private void Awake()
    {
        _btnPlay.onClick.AddListener(OnClickBtnPlay);
        _btnQuit.onClick.AddListener(OnClickBtnQuit);
    }

    private void Start()
    {
        // yield return new WaitForSeconds(1f); // Give the loader a moment
         Luna.Unity.LifeCycle.GameStarted();
        Reset();
    }

    void Update()
    {
        // If the screen is black, click it. This will force the game to start.
        if (Input.GetMouseButtonDown(0))
        {
            Luna.Unity.LifeCycle.GameStarted();
            Debug.Log("Starting");
        }
    }

    private void OnClickBtnPlay()
    {
        GameManager.Instance.Play();
    }
    private void OnClickBtnQuit()
    {
        Application.Quit();
    }

    public void Reset()
    {
        _txtHighScore.text = string.Format(STRFMT_HIGHSCORE, GameManager.Instance.GetHighScore());
    }
}
